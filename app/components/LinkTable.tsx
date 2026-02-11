import {
	Button,
	Table,
	LayerCard,
	Tooltip,
	TooltipProvider,
} from "@cloudflare/kumo";
import { PencilSimpleIcon, TrashSimpleIcon } from "@phosphor-icons/react";

const linkData = [
	{
		slug: "example",
		link: "https://example.com",
		by: "johndoe@example.com",
		date: "3 days ago",
	},
];

export function LinkTable() {
	return (
		<TooltipProvider>
			<LayerCard>
				<LayerCard.Primary className="p-0">
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
										<div className="flex items-center gap-2">
											<Tooltip content="Edit" asChild>
												<Button variant="ghost" size="sm" shape="square" aria-label="Edit link">
													<PencilSimpleIcon weight="bold" size={16} />
												</Button>
											</Tooltip>
											<Tooltip content="Delete" asChild>
												<Button variant="ghost" size="sm" shape="square" aria-label="Delete link">
													<TrashSimpleIcon weight="bold" size={16} />
												</Button>
											</Tooltip>
										</div>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</LayerCard.Primary>
			</LayerCard>
		</TooltipProvider>
	);
}
