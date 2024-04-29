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

export default function OverviewCard() {
	return (
		<Card className="min-w-[400px] basis-1 grow h-full flex flex-col">
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
