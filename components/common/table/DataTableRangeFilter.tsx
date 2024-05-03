"use client";
import { Input } from "@/components/ui/input";
import { IntRange } from "@/lib/types";
import { Table } from "@tanstack/react-table";
import React, { useEffect } from "react";

export default function DataTableRangeFilter<TData>({
	table,
	accessorKey,
	label,
}: {
	table: Table<TData>;
	accessorKey: string;
	label: string;
}) {
	function getCurrentRange() {
		return table.getColumn(accessorKey)?.getFilterValue() as IntRange;
	}

	return (
		<div className="flex flex-row items-center">
			<div className="text-sm font-medium pr-2">{label}:</div>
			<div className="text-sm pr-1">Min</div>
			<Input
				type="number"
				value={getCurrentRange()?.min ?? ""}
				onChange={(event) => {
					const currentRange = getCurrentRange();
					const val = event.target.valueAsNumber;
					// if (val <= currentRange?.max) {
					// 	const range = {
					// 		min: val,
					// 		max: currentRange?.max,
					// 	};
					// 	table.getColumn(accessorKey)?.setFilterValue(range);
					// }
					const range = {
						min: val,
						max: currentRange?.max,
					};
					table.getColumn(accessorKey)?.setFilterValue(range);
				}}
				className="h-8 w-[100px] mr-2"
			/>
			<div className="text-sm pr-1">Max</div>
			<Input
				type="number"
				value={getCurrentRange()?.max ?? ""}
				onChange={(event) => {
					const currentRange = getCurrentRange();
					const val = event.target.valueAsNumber;
					// if (val >= currentRange?.min) {
					// 	const range = {
					// 		min: currentRange?.min,
					// 		max: val,
					// 	};
					// 	table.getColumn(accessorKey)?.setFilterValue(range);
					// }
					const range = {
						min: currentRange?.min,
						max: val,
					};
					table.getColumn(accessorKey)?.setFilterValue(range);
				}}
				className="h-8 w-[100px]"
			/>
		</div>
	);
}
