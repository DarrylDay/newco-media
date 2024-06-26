"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "../../../common/table/DataTableViewOptions";
import { DataTableFacetedFilter } from "../../../common/table/DataTableFacetedFilter";
import DataTableSearchInput from "@/components/common/table/DataTableSearchInput";
import { PodcastInfo } from "@/lib/types";

export function PodcastToolbar({
	table,
	data,
}: {
	table: Table<PodcastInfo>;
	data: PodcastInfo[];
}) {
	function getOptions(options: string[]) {
		return options
			.filter(function (v, i, self) {
				return i == self.indexOf(v);
			})
			.sort()
			.map((x) => ({ value: x, label: x }));
	}

	const publishers = getOptions(data.map((info) => info.publisher));
	const categories = getOptions(data.map((info) => info.category));
	const countries = getOptions(data.map((info) => info.primaryCountry));
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<DataTableSearchInput
					table={table}
					accessorKey="name"
					placeholder="Filter podcasts..."
				/>
				{table.getColumn("publisher") && (
					<DataTableFacetedFilter
						column={table.getColumn("publisher")}
						title="Publisher"
						options={publishers}
					/>
				)}
				{table.getColumn("category") && (
					<DataTableFacetedFilter
						column={table.getColumn("category")}
						title="Category"
						options={categories}
					/>
				)}
				{table.getColumn("primaryCountry") && (
					<DataTableFacetedFilter
						column={table.getColumn("primaryCountry")}
						title="Country"
						options={countries}
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
