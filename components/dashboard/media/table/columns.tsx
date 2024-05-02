"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "./data/data";
import { Task } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { PodcastInfo } from "@/lib/types";

export const columns2: ColumnDef<PodcastInfo>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Show Name" />
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
		cell: ({ row }) => <div className="">{row.getValue("adPricing")}</div>,
		enableSorting: true,
		enableHiding: true,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
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

export const columns: ColumnDef<Task>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Task" />
		),
		cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "title",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Title" />
		),
		cell: ({ row }) => {
			const label = labels.find(
				(label) => label.value === row.original.label
			);

			return (
				<div className="flex space-x-2">
					{label && <Badge variant="outline">{label.label}</Badge>}
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue("title")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ row }) => {
			const status = statuses.find(
				(status) => status.value === row.getValue("status")
			);

			if (!status) {
				return null;
			}

			return (
				<div className="flex w-[100px] items-center">
					{status.icon && (
						<status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
					)}
					<span>{status.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "priority",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Priority" />
		),
		cell: ({ row }) => {
			const priority = priorities.find(
				(priority) => priority.value === row.getValue("priority")
			);

			if (!priority) {
				return null;
			}

			return (
				<div className="flex items-center">
					{priority.icon && (
						<priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
					)}
					<span>{priority.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
