import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import CampaignAdCheckRow from "./CampaignAdCheckRow";
import { Campaign } from "@/lib/types";

export default function CampaignAdCheckTable({
	campaign,
}: {
	campaign?: Campaign;
}) {
	return (
		<div className="min-w-[400px] flex flex-col space-y-4 grow mt-4">
			<div className="flex flex-row items-center">
				<div className="text-xl">Ad Check</div>
			</div>
			<Separator />
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="max-w-[300px]">TITLE</TableHead>
						<TableHead>DATE</TableHead>
						<TableHead className="hidden md:table-cell">
							CONFIRMED
						</TableHead>
						<TableHead className="hidden md:table-cell">
							TOTAL DOWNLOADS
						</TableHead>
						<TableHead className="hidden md:table-cell">
							CPM
						</TableHead>
						<TableHead className="hidden md:table-cell">
							RECORDINGS
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{campaign?.adChecks &&
						campaign.adChecks.map((x) => (
							<CampaignAdCheckRow
								key={x.title}
								adCheck={x}
								perUnitCost={campaign.perUnitCost}
							/>
						))}
				</TableBody>
			</Table>
		</div>
	);
}
