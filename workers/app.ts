import { Hono } from "hono";
import { jwt } from "hono/jwt";
import { createRequestHandler } from "react-router";

const app = new Hono<{ Bindings: Env }>();

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

// Secure all the API routes
app.use("/api/*", (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: "HS256"
  });
  return jwtMiddleware(c, next);
});

// Create a new URL mapping
app.post('/api/url', async (c) => {
  const env = c.env;
  const payload = await c.req.json();
  const slug = payload.slug;
  const url = payload.url;
  console.log({ slug, url });
  await env.URLS.put(slug, url);
  return c.json({ success: true });
});

// Redirect based on slug
app.get("/:slug", async (c) => {
  const slug = c.req.param("slug");
  const url = await c.env.URLS.get(slug);
  if (url === null) {
    return c.status(404);
  }
  // Redirect
  return c.redirect(url);
});

app.get("*", (c) => {
  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx }
  });
});

export default app;
