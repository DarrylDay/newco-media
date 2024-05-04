"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { AllMediaToolbar } from "./AllMediaToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { MediaInfo } from "@/lib/types";
import { PodcastColumns } from "./AllMediaColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFilterSearchParams } from "@/components/common/table/DataTableSearchParams";

export function AllMediaTable({ data }: { data: MediaInfo[] }) {
	const columns = PodcastColumns;
	const table = useDataTable({ columns, data });
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useFilterSearchParams(columns, table, router, pathname, searchParams);

	React.useEffect(() => {
		table.getColumn("adPricing")?.setFilterValue({
			min: 0,
			max: Math.max(...data.map((x) => x.adPricing)),
		});
	}, [data]);

	return (
		<div className="space-y-4">
			<AllMediaToolbar table={table} data={data} />
			<DataTable table={table} />
			<DataTablePagination table={table} />
		</div>
	);
}
