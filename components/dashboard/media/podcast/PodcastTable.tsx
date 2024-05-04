"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { PodcastToolbar } from "./PodcastToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { PodcastInfo } from "@/lib/types";
import { PodcastColumns } from "./PodcastColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFilterSearchParams } from "@/components/common/table/DataTableSearchParams";

export function PodcastTable({ data }: { data: PodcastInfo[] }) {
	const columns = PodcastColumns;
	const table = useDataTable({ columns, data });
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useFilterSearchParams(columns, table, router, pathname, searchParams);

	return (
		<div className="space-y-4">
			<PodcastToolbar table={table} data={data} />
			<DataTable table={table} />
			<DataTablePagination table={table} />
		</div>
	);
}
