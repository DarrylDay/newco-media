"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../common/table/DataTableColumnHeader";
import { IntRange, PodcastInfo } from "@/lib/types";

export const PodcastColumns: ColumnDef<PodcastInfo>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Show Name" />
		),
		cell: ({ row }) => (
			<div className="min-w-[200px]">{row.getValue("name")}</div>
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
		accessorKey: "episodeCount",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Episode Count" />
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("episodeCount")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "host",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Host" />
		),
		cell: ({ row }) => <div className="">{row.getValue("host")}</div>,
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
		accessorKey: "adPositions",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Ad Positions" />
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("adPositions")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "numAdSlots",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Ad Slots" />
		),
		cell: ({ row }) => <div className="">{row.getValue("numAdSlots")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "original",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Original" />
		),
		cell: ({ row }) => <div className="">{row.getValue("original")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "episodeDay",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Episode Day" />
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
	{
		accessorKey: "episodesPerWeek",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Episodes Per Week" />
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("episodesPerWeek")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "genderDistribution",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Gender Distribution"
			/>
		),
		cell: ({ row }) => (
			<div className="">{row.getValue("genderDistribution")}</div>
		),
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "avgHHI",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Avg HHI" />
		),
		cell: ({ row }) => <div className="">{row.getValue("avgHHI")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "platforms",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Platforms" />
		),
		cell: ({ row }) => <div className="">{row.getValue("platforms")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
];
