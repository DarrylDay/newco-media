import { DataTable } from "@/components/DataTable";
import Table from "@/components/dashboard/media/table/data-table-loaded";
import { CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<main>
			<div className="px-6 pt-6 pb-2 h-[72px] gap-4 flex flex-row items-center">
				<CardTitle>Media</CardTitle>
			</div>
			<div className="px-6 pb-6 pt-3">
				{/* <DataTable /> */}
				<Table />
			</div>
		</main>
	);
}
