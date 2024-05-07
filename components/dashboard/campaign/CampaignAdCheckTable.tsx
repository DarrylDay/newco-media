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
				<div className="text-xl">Ad Buys</div>
			</div>
			<Separator />
			<Table>
				<TableHeader>
					<TableRow className="header-text">
						<TableHead className="min-w-[300px] w-[400px]">
							TITLE
						</TableHead>
						<TableHead>DATE</TableHead>
						<TableHead className="">CONFIRMED</TableHead>
						<TableHead className="">TOTAL DOWNLOADS</TableHead>
						<TableHead className="">CPM</TableHead>
						<TableHead className="">RECORDINGS</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="value-text">
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
