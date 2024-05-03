"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { PodcastToolbar } from "./PodcastToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { PodcastInfo } from "@/lib/types";
import { PodcastColumns } from "./PodcastColumns";

export function PodcastTable({ data }: { data: PodcastInfo[] }) {
	const columns = PodcastColumns;
	const table = useDataTable({ columns, data });

	return (
		<div className="space-y-4">
			<PodcastToolbar table={table} data={data} />
			<DataTable table={table} />
			<DataTablePagination table={table} />
		</div>
	);
}
