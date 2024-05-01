import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "../ui/card";
import { Progress } from "../ui/progress";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { campaigns } from "@/lib/demoData";

export default function OverviewCard() {
	const netSpend = campaigns.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.netCost;
	}, 0);

	const totalCPM = campaigns.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.cpm;
	}, 0);
	const avgCPM = totalCPM / campaigns.length;
	const totalLeads = campaigns.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.leads;
	}, 0);

	return (
		<Card className="min-w-[375px] max-w-[600px] h-[200px] basis-1 grow flex flex-col">
			<CardHeader className="pb-2 flex flex-row space-y-0">
				<CardTitle className="text-lg">Overview</CardTitle>
				<div className="grow"></div>
				<Link
					href="/dashboard"
					className={`flex items-center m-0 gap-3 text-muted-foreground transition-all hover:text-primary`}
				>
					View spend
					<div className="grow"></div>
					<ChevronRight className="h-4" />
				</Link>
			</CardHeader>
			<CardContent className="grow flex flex-col justify-center">
				<Progress
					className="my-2"
					value={80}
					aria-label="33% increase"
				/>
			</CardContent>
			<CardFooter>
				<div className="flex flex-row grow gap-4">
					<div className="grow basis-1">
						<div className="text-2xl">${netSpend.toFixed(2)}</div>
						<div className="text-xs text-muted-foreground">
							Net spend
						</div>
					</div>
					<div className="grow basis-1">
						<div className="text-2xl">${avgCPM.toFixed(2)}</div>
						<div className="text-xs text-muted-foreground">
							Avg CPM
						</div>
					</div>
					<div className="grow basis-1">
						<div className="text-2xl">{totalLeads}</div>
						<div className="text-xs text-muted-foreground">
							Qualified Leads
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
