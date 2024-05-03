"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../common/table/DataTableColumnHeader";
import { MediaInfo } from "@/lib/types";

export const PodcastColumns: ColumnDef<MediaInfo>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Media Name" />
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
		accessorKey: "mediaType",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Media Type" />
		),
		cell: ({ row }) => <div className="">{row.getValue("mediaType")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "publisher",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Publisher" />
		),
		cell: ({ row }) => <div className="">{row.getValue("publisher")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "category",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Category" />
		),
		cell: ({ row }) => <div className="">{row.getValue("category")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "adPricing",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Ad Pricing" />
		),
		cell: ({ row }) => (
			<div className="">
				{"$" + (row.getValue("adPricing") as number).toLocaleString()}
			</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
];
