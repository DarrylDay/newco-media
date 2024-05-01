import { DataTable } from "@/components/DataTable";
import Table from "@/components/dashboard/media/table/data-table-loaded";
import { CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
	return (
		<main className="w-full flex flex-col">
			<div className="h-[72px] gap-4 flex flex-row items-center">
				<CardTitle>Media</CardTitle>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="podcast" className="">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="podcast">Podcast</TabsTrigger>
						<TabsTrigger value="newsletter">Newsletter</TabsTrigger>
						<TabsTrigger value="creator">Creator</TabsTrigger>
						<TabsTrigger value="display">Display</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
			<div className="pt-3">
				{/* <DataTable /> */}
				<Table />
			</div>
		</main>
	);
}
