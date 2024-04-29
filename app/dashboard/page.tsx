"use client";
import AlertsCard from "@/components/dashboard/AlertsCard";
import BudgetCard from "@/components/dashboard/BudgetCard";
import CampaignResults from "@/components/dashboard/CampaignResults";
import OverviewCard from "@/components/dashboard/OverviewCard";
import { CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
	return (
		<main>
			<div className="px-6 pt-6 flex flex-row">
				<CardTitle>Dashboard</CardTitle>
				<div className="grow"></div>
				<Tabs defaultValue="1M" className="">
					<TabsList>
						<TabsTrigger value="1M">1M</TabsTrigger>
						<TabsTrigger value="3M">3M</TabsTrigger>
						<TabsTrigger value="6M">6M</TabsTrigger>
						<TabsTrigger value="1Y">1Y</TabsTrigger>
						<TabsTrigger value="ALL">ALL</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<div className="flex flex-row p-6 gap-8 flex-wrap">
				<OverviewCard />
				<AlertsCard />
				<BudgetCard />
				<CampaignResults />
			</div>
		</main>
	);
}
