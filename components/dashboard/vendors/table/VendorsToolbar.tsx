"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "../../../common/table/DataTableViewOptions";
import { DataTableFacetedFilter } from "../../../common/table/DataTableFacetedFilter";
import DataTableSearchInput from "@/components/common/table/DataTableSearchInput";
import { MediaInfo, PodcastInfo, Vendor } from "@/lib/types";
import DataTableRangeFilter from "@/components/common/table/DataTableRangeFilter";

export function VendorsToolbar({
	table,
	data,
}: {
	table: Table<Vendor>;
	data: Vendor[];
}) {
	function getOptions(options: string[]) {
		return options
			.filter(function (v, i, self) {
				return i == self.indexOf(v);
			})
			.sort()
			.map((x) => ({ value: x, label: x }));
	}

	const mediaTypes = getOptions(data.flatMap((vendor) => vendor.mediaTypes));
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<DataTableSearchInput
					table={table}
					accessorKey="name"
					placeholder="Filter vendors..."
				/>
				{table.getColumn("mediaTypes") && (
					<DataTableFacetedFilter
						column={table.getColumn("mediaTypes")}
						title="Media Types"
						options={mediaTypes}
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}
