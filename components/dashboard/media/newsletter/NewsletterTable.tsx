"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { NewsletterToolbar } from "./NewsletterToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { NewsletterInfo } from "@/lib/types";
import { NewsletterColumns } from "./NewsletterColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFilterSearchParams } from "@/components/common/table/DataTableSearchParams";

export function NewsletterTable({ data }: { data: NewsletterInfo[] }) {
	const columns = NewsletterColumns;
	const table = useDataTable({ columns, data });
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useFilterSearchParams(columns, table, router, pathname, searchParams);

	return (
		<div className="space-y-4">
			<NewsletterToolbar table={table} data={data} />
			<DataTable table={table} />
			<DataTablePagination table={table} />
		</div>
	);
}
