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
		<div className="min-w-[400px] flex flex-col space-y-4 grow mt-4">
			<div className="flex flex-row items-center">
				<div className="text-xl">Campaigns</div>
			</div>
			<Separator />
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Campaign</TableHead>
						<TableHead>Type</TableHead>
						<TableHead className="hidden md:table-cell">
							Date
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Alerts
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Leads
						</TableHead>
						<TableHead className="hidden md:table-cell">
							CPM
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Net Cost
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{campaigns.map((x) => (
						<CampaignTableRow key={x.uid} campaign={x} />
					))}
				</TableBody>
			</Table>
		</div>
	);
}
