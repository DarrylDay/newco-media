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
import { Vendor } from "@/lib/types";
import { Sheet } from "@/components/ui/sheet";
import VendorsSheet from "./sheet/VendorsSheet";

export default function VendorsTableRow({ vendor }: { vendor: Vendor }) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<TableRow key={vendor.name} onClick={() => setOpen(true)}>
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
						<Badge key={x} className="mr-2" variant="outline">
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
			<VendorsSheet vendor={vendor} />
		</Sheet>
	);
}
