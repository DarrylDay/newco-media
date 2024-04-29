import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function CampaignCard({
	color,
	title,
	number,
}: {
	color: string;
	title: string;
	number: number;
}) {
	return (
		<Card>
			<div className="flex flex-row p-3 gap-3 items-center">
				<Badge key={title} style={{ backgroundColor: color }}></Badge>
				<div className="text-lg">{title}</div>
				<div className="text-xl font-bold">{number}</div>
			</div>
		</Card>
	);
}
