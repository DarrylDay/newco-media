"use client";
import AlertsCard from "@/components/dashboard/AlertsCard";
import BudgetCard from "@/components/dashboard/BudgetCard";
import CampaignResults from "@/components/dashboard/CampaignResults";
import CampaignTable from "@/components/dashboard/CampaignTable";
import OverviewCard from "@/components/dashboard/OverviewCard";
import { CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
	return (
		<div className="w-full flex flex-row justify-center">
			<main className="w-full max-w-[1500px]">
				<div className="flex flex-row items-center">
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
				<div className="flex flex-row py-6 gap-6 flex-wrap">
					<OverviewCard />
					<BudgetCard />
					<AlertsCard />
					<CampaignResults />
				</div>
				<div className="pt-2">
					<CampaignTable />
				</div>
			</main>
		</div>
	);
}
