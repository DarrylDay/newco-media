import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import React from "react";

export default function DataTableSearchInput<TData>({
	table,
	accessorKey,
	placeholder,
}: {
	table: Table<TData>;
	accessorKey: string;
	placeholder?: string;
}) {
	return (
		<>
			<Input
				placeholder={placeholder ? placeholder : "Filter..."}
				value={
					(table
						.getColumn(accessorKey)
						?.getFilterValue() as string) ?? ""
				}
				onChange={(event) =>
					table
						.getColumn(accessorKey)
						?.setFilterValue(event.target.value)
				}
				className="h-8 w-[150px] lg:w-[250px]"
			/>
		</>
	);
}
