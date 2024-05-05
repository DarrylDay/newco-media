"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../common/table/DataTableColumnHeader";
import { IntRange, NewsletterInfo } from "@/lib/types";

export const NewsletterColumns: ColumnDef<NewsletterInfo>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Newsletter Name" />
		),
		cell: ({ row }) => (
			<div className="min-w-[200px] font-medium">
				{row.getValue("name")}
			</div>
		),
		enableSorting: true,
		enableHiding: false,
		filterFn: (row, id, value) => {
			const name = value instanceof Array ? value[0] : value;
			return (row.getValue(id) as string)
				.toLocaleUpperCase()
				.includes(name.toLocaleUpperCase());
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
			const range = value as IntRange;
			const rowValue = row.getValue(id) as number;
			return range.min <= rowValue && rowValue <= range.max;
		},
	},
	{
		accessorKey: "placement",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Placement" />
		),
		cell: ({ row }) => <div className="">{row.getValue("placement")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "episodeDay",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Release Day" />
		),
		cell: ({ row }) => <div className="">{row.getValue("episodeDay")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "primaryCountry",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Primary Country" />
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("primaryCountry")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
];
