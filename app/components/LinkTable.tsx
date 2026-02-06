import { Button, Table } from "@cloudflare/kumo";
import { TrashIcon } from "@phosphor-icons/react";

const linkData = [
  {
    slug: "example",
    link: "https://example.com",
    by: "johndoe@example.com",
    date: "3 days ago"
  }
];

export function LinkTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.CheckHead />
          <Table.Head>Slug</Table.Head>
          <Table.Head>Link</Table.Head>
          <Table.Head>By</Table.Head>
          <Table.Head>Date</Table.Head>
          <Table.Head></Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {linkData.map((row) => (
          <Table.Row key={row.slug}>
            <Table.CheckCell />
            <Table.Cell>{row.slug}</Table.Cell>
            <Table.Cell>{row.link}</Table.Cell>
            <Table.Cell>{row.by}</Table.Cell>
            <Table.Cell>{row.date}</Table.Cell>
            <Table.Cell className="text-right">
              <Button variant="ghost" size="sm" shape="square">
                <TrashIcon weight="bold" size={16} />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
