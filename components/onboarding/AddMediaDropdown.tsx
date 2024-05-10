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
import { useRouter } from "next/navigation";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function AddMediaDropdown() {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Add</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuItem
					onClick={() => {
						router.push("media/add/podcast");
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
