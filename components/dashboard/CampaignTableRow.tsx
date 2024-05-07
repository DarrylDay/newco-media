"use client";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Campaign } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function CampaignTableRow({ campaign }: { campaign: Campaign }) {
	const router = useRouter();

	return (
		<TableRow
			key={campaign.uid}
			onClick={() => router.push("/dashboard/campaign/" + campaign.uid)}
		>
			<TableCell className="">{campaign.campaignName}</TableCell>
			<TableCell>{campaign.type}</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.date}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.alerts}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.leads}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				${campaign.cpm}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				${campaign.netCost}
			</TableCell>
		</TableRow>
	);
}
