"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function AddMedia({
	setAddMedia,
}: {
	setAddMedia: (media: string) => void;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Add</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				{/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator /> */}
				<DropdownMenuItem
					onClick={() => {
						setAddMedia("Podcast");
					}}
				>
					Podcast
				</DropdownMenuItem>
				<DropdownMenuItem>Newsletter</DropdownMenuItem>
				<DropdownMenuItem>YouTube</DropdownMenuItem>
				<DropdownMenuItem>Radio</DropdownMenuItem>
				<DropdownMenuItem>TV</DropdownMenuItem>
				<DropdownMenuItem>Billboard</DropdownMenuItem>
				<DropdownMenuItem>Magazines</DropdownMenuItem>
				<DropdownMenuItem>Other</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
