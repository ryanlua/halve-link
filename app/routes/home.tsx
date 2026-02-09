import { LinkTable } from "../components/LinkTable";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Links" },
    { name: "description", content: "Manage your shortened links" },
  ];
}

export default function Home() {
  return <LinkTable />;
}
