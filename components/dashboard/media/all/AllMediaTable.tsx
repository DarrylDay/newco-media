"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { AllMediaToolbar } from "./AllMediaToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { MediaInfo } from "@/lib/types";
import { PodcastColumns } from "./AllMediaColumns";

export function AllMediaTable({ data }: { data: MediaInfo[] }) {
	const columns = PodcastColumns;
	const table = useDataTable({ columns, data });

	React.useEffect(() => {
		table.getColumn("adPricing")?.setFilterValue({ min: 0, max: 10000 });
	}, [data]);

	return (
		<div className="space-y-4">
			<AllMediaToolbar table={table} data={data} />
			<DataTable table={table} />
			<DataTablePagination table={table} />
		</div>
	);
}
