import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "../ui/card";
import { Progress } from "../ui/progress";

export default function OverviewCard() {
	return (
		<Card className="min-w-[400px] grow">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg">Overview</CardTitle>
			</CardHeader>
			<CardContent>
				<Progress
					className="my-2"
					value={75}
					aria-label="57% increase"
				/>
			</CardContent>
			<CardFooter>
				<div className="flex flex-row grow">
					<div className="grow basis-1">
						<div className="text-2xl font-bold">$50,104</div>
						<div className="text-xs text-muted-foreground">
							Net spend
						</div>
					</div>
					<div className="grow basis-1">
						<div className="text-2xl font-bold">$21.14</div>
						<div className="text-xs text-muted-foreground">
							Avg CPM
						</div>
					</div>
					<div className="grow basis-1">
						<div className="text-2xl font-bold">78</div>
						<div className="text-xs text-muted-foreground">
							Qualified Leads
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
