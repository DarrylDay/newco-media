import TextDisplay from "@/components/TextDisplay";
import CampaignAdCheckTable from "@/components/dashboard/campaign/CampaignAdCheckTable";
import { Separator } from "@/components/ui/separator";
import { campaigns } from "@/lib/demoData";
import React from "react";

export default function Page({ params }: { params: { uid: string } }) {
	const campagin = campaigns.find((x) => x.uid == params.uid);

	return (
		<div className="w-full flex flex-row justify-center">
			<main className="w-full max-w-[1500px] flex flex-col gap-4">
				<div>
					<h3 className="text-2xl font-bold">Campagin</h3>
					<p className="text-muted-foreground">
						{campagin?.campaignName}
					</p>
				</div>
				<Separator />
				<TextDisplay title="Media Name" value={campagin?.mediaName} />
				<TextDisplay
					title="Campaign Start Date"
					value={campagin?.startDate}
				/>
				<TextDisplay
					title="Campaign End Date"
					value={campagin?.endDate}
				/>
				<TextDisplay
					title="Media Buys"
					value={campagin?.mediaBuys.toString()}
				/>
				<TextDisplay
					title="Per Unit Cost"
					value={"$" + campagin?.perUnitCost.toLocaleString()}
				/>
				<TextDisplay
					title="Net Cost"
					value={"$" + campagin?.newCost.toLocaleString()}
				/>
				<TextDisplay
					title="Contract Link"
					value={campagin?.contractLink}
					isLink={true}
				/>
				<CampaignAdCheckTable campaign={campagin} />
			</main>
		</div>
	);
}
