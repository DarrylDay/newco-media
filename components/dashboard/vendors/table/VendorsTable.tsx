"use client";

import * as React from "react";
import { DataTablePagination } from "@/components/common/table/DataTablePagination";
import { VendorsToolbar } from "./VendorsToolbar";
import { useDataTable, DataTable } from "@/components/common/table/DataTable";
import { Vendor } from "@/lib/types";
import { VendorColumns } from "./VendorsColumns";
import { Sheet } from "@/components/ui/sheet";
import VendorsSheet from "../sheet/VendorsSheet";

export function VendorsTable({ data }: { data: Vendor[] }) {
	const columns = VendorColumns;
	const table = useDataTable({ columns, data });
	const [open, setOpen] = React.useState(false);
	const [vendor, setVendor] = React.useState<Vendor>();

	return (
		<div className="space-y-4">
			<VendorsToolbar table={table} data={data} />
			<DataTable
				table={table}
				onRowClick={(id) => {
					setVendor(data.find((x) => x.name == id));
					setOpen(true);
				}}
			/>
			<DataTablePagination table={table} />
			<Sheet open={open} onOpenChange={setOpen}>
				<VendorsSheet vendor={vendor} />
			</Sheet>
		</div>
	);
}
