import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Separator } from "../ui/separator";
import { campaigns } from "@/lib/demoData";
import CampaignTableRow from "./CampaignTableRow";

export default function CampaignTable() {
	return (
		<div className="min-w-[400px] h-[350px] flex flex-col space-y-4 grow mt-4">
			<div className="flex flex-row items-center">
				<div className="text-xl">Campaigns</div>
			</div>
			<Separator />
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>CAMPAIGN</TableHead>
						<TableHead>TYPE</TableHead>
						<TableHead className="hidden md:table-cell">
							DATE
						</TableHead>
						<TableHead className="hidden md:table-cell">
							VIEWS
						</TableHead>
						<TableHead className="hidden md:table-cell">
							CPM
						</TableHead>
						<TableHead className="hidden md:table-cell">
							NET COST
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{campaigns.map((x) => (
						<CampaignTableRow key={x.name} campaign={x} />
					))}
				</TableBody>
			</Table>
		</div>
	);
}
