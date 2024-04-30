import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import CampaignChart from "./CampaignChart";
import CampaignCard from "./CampaignCard";

export default function CampaignResults() {
	return (
		<div className="min-w-[400px] h-[350px] flex flex-col space-y-4 grow">
			<div className="flex flex-row items-center">
				<div className="text-xl">Qualified leads by campaign</div>
				<div className="grow"></div>
				<div className="flex flex-row">
					<ChevronLeft />
					<div className="px-2">Jan 1 - Jan 31, 2024</div>
					<ChevronRight />
				</div>
			</div>
			<div className="flex flex-row gap-4 flex-wrap">
				<CampaignCard color="#8884d8" title={"Display"} number={29} />
				<CampaignCard
					color="#82ca9d"
					title={"Newsletter"}
					number={14}
				/>
				<CampaignCard color="#2563eb" title={"Creator"} number={82} />
				<CampaignCard color="#ffc658" title={"Podcast"} number={30} />
			</div>
			<div className="w-full h-full">
				<CampaignChart />
			</div>
		</div>
	);
}
