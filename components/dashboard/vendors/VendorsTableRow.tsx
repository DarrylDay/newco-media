"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";
import VendorsDialog from "./VendorsDialog";
import { Vendor } from "@/lib/types";

export default function VendorsTableRow({ vendor }: { vendor: Vendor }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<TableRow onClick={() => setOpen(true)}>
				<TableCell className="hidden sm:table-cell">
					<Image
						alt="Logo image"
						className="aspect-square rounded-md object-contain"
						height="64"
						src={vendor.logoURL}
						width="64"
					/>
				</TableCell>
				<TableCell className="font-medium">{vendor.name}</TableCell>
				<TableCell>
					{vendor.mediaTypes.map((x) => (
						<Badge className="mr-2" variant="outline">
							{x}
						</Badge>
					))}
				</TableCell>
				<TableCell className="hidden md:table-cell">
					{vendor.mediaCount}
				</TableCell>
				<TableCell className="hidden md:table-cell">
					{vendor.activeCampaigns}
				</TableCell>
				<TableCell>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								aria-haspopup="true"
								size="icon"
								variant="ghost"
							>
								<MoreHorizontal className="h-4 w-4" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem>Edit</DropdownMenuItem>
							<DropdownMenuItem>Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</TableCell>
			</TableRow>
			<VendorsDialog vendor={vendor} />
		</Dialog>
	);
}
