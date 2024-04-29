import OverviewCard from "@/components/dashboard/OverviewCard";
import { CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<main>
			<CardTitle className="px-6 pt-6 pb-2">Dashboard</CardTitle>
			<div className="flex flex-row p-6 space-x-8">
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
			</div>
		</main>
	);
}
