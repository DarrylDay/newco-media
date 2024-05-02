"use client";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { Check, X, Play } from "lucide-react";
import { AdCheck, Campaign } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function CampaignAdCheckRow({
	perUnitCost,
	adCheck,
}: {
	perUnitCost: number;
	adCheck: AdCheck;
}) {
	return (
		<TableRow key={adCheck.title}>
			<TableCell className="font-medium max-w-[300px]">
				{adCheck.title}
			</TableCell>
			<TableCell>{adCheck.date}</TableCell>
			<TableCell className="hidden md:table-cell">
				{adCheck.confirmed ? <Check /> : <X />}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{adCheck.totalDownloads.toLocaleString()}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				${(perUnitCost / (adCheck.totalDownloads / 1000)).toFixed(2)}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				<Button variant={"outline"}>
					<Play />
				</Button>
			</TableCell>
		</TableRow>
	);
}
