"use client";
import { ColumnDef, Table } from "@tanstack/react-table";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import React from "react";

export function useFilterSearchParams<TData>(
	columns: ColumnDef<TData>[],
	table: Table<TData>,
	router: AppRouterInstance,
	pathname: string,
	searchParams: ReadonlyURLSearchParams
) {
	const tableState = table.getState();

	const createQueryString = React.useCallback(
		(entries: { name: string; value: string }[]) => {
			const params = new URLSearchParams(searchParams.toString());
			entries.forEach((x) => params.set(x.name, x.value));
			return params.toString();
		},
		[searchParams]
	);

	React.useEffect(() => {
		table.getColumn("name")?.toggleSorting(false);
	}, []);

	React.useEffect(() => {
		for (const column of columns) {
			const aColumn = column as any;
			if (aColumn.accessorKey) {
				const param = searchParams.get(aColumn.accessorKey);
				if (param) {
					table
						.getColumn(aColumn.accessorKey)
						?.setFilterValue(param.split(","));
				}
			}
		}
	}, []);

	React.useEffect(() => {
		//console.log(tableState);
		// router.push(
		// 	pathname +
		// 		"?" +
		// 		createQueryString(
		// 			tableState.columnFilters.map((x) => ({
		// 				name: x.id,
		// 				value: x.value as any,
		// 			}))
		// 		)
		// );
		if (tableState.columnFilters.length > 0) {
			var params = new URLSearchParams();
			tableState.columnFilters.forEach((x) => {
				if (x.id != "adPricing") params.set(x.id, x.value as any);
			});
			router.push(pathname + "?" + params.toString());
		} else {
			router.push(pathname);
		}
	}, [tableState.columnFilters]);
}
