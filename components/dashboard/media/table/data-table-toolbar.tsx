"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { priorities, statuses } from "./data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export const categories = [
	{
		value: "General",
		label: "General",
	},
	{
		value: "Technology",
		label: "Technology",
	},
	{
		value: "Business & Finance",
		label: "Business & Finance",
	},
	{
		value: "Health & Wellness",
		label: "Health & Wellness",
	},
	{
		value: "Entertainment & Media",
		label: "Entertainment & Media",
	},
];

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<Input
					placeholder="Filter media..."
					value={
						(table.getColumn("name")?.getFilterValue() as string) ??
						""
					}
					onChange={(event) =>
						table
							.getColumn("name")
							?.setFilterValue(event.target.value)
					}
					className="h-8 w-[150px] lg:w-[250px]"
				/>
				{/* {table.getColumn("publisher") && (
					<DataTableFacetedFilter
						column={table.getColumn("publisher")}
						title="Publisher"
						options={statuses}
					/>
				)} */}
				{table.getColumn("category") && (
					<DataTableFacetedFilter
						column={table.getColumn("category")}
						title="Category"
						options={categories}
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
