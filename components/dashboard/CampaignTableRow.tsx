"use client";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Campaign } from "@/lib/types";

export default function CampaignTableRow({ campaign }: { campaign: Campaign }) {
	return (
		<TableRow key={campaign.name}>
			<TableCell className="font-medium">{campaign.name}</TableCell>
			<TableCell>{campaign.type}</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.date}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.views}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.cpm}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{campaign.netCost}
			</TableCell>
		</TableRow>
	);
}
