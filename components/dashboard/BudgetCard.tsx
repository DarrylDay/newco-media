import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import BudgetChart from "./BudgetChart";

export default function BudgetCard() {
	return (
		<Card className="min-w-[500px] max-w-[600px] h-[200px] basis-1 grow flex flex-col">
			<CardHeader className="pb-0">
				<CardTitle className="text-lg">Budget</CardTitle>
			</CardHeader>
			<CardContent className="grow">
				<div className="flex flex-row grow h-full">
					<div className="flex flex-col grow basis-1 justify-center content-center">
						<div className="grow flex flex-col justify-center">
							<div>
								<Badge>
									<Check className="mr-2 w-4 h-6" />
									On track
								</Badge>
							</div>
						</div>
						<div className="flex flex-row">
							<div className="grow basis-1">
								<div className="text-2xl">$20K</div>
								<div className="text-xs text-muted-foreground">
									$2,500 left
								</div>
							</div>
							<div className="grow basis-1">
								<div className="text-2xl">$17.5K</div>
								<div className="text-xs text-muted-foreground">
									Projected
								</div>
							</div>
						</div>
					</div>
					<div className="grow basis-1">
						<BudgetChart />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
