"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../common/table/DataTableColumnHeader";
import { Vendor } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const VendorColumns: ColumnDef<Vendor>[] = [
	{
		accessorKey: "logoURL",
		header: ({ column }) => <></>,
		cell: ({ row }) => (
			<div className="flex justify-center">
				<Image
					alt="Logo image"
					className="aspect-square rounded-md object-contain"
					height="50"
					src={row.getValue("logoURL")}
					width="50"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Vendor Name" />
		),
		cell: ({ row }) => (
			<div className="min-w-[200px] font-medium">
				{row.getValue("name")}
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "mediaTypes",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Media Types" />
		),
		cell: ({ row }) => {
			const mediaTypes = row.getValue("mediaTypes") as string[];
			return mediaTypes.map((x) => (
				<Badge key={x} className="mr-2" variant="outline">
					{x}
				</Badge>
			));
		},
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			const mediaTypes = row.getValue(id) as string[];
			const filters = value as string[];
			for (const filter of filters) {
				if (mediaTypes.includes(filter)) {
					return true;
				}
			}
			return false;
		},
	},
	{
		accessorKey: "mediaCount",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Media Count" />
		),
		cell: ({ row }) => <div className="">{row.getValue("mediaCount")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "activeCampaigns",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Active Campaigns" />
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("activeCampaigns")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
];
