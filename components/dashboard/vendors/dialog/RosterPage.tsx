import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { Vendor } from "@/lib/types";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function RosterPage({ vendor }: { vendor: Vendor }) {
	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Media Types</TableHead>
						<TableHead className="hidden md:table-cell">
							Media Count
						</TableHead>
						<TableHead className="hidden md:table-cell">
							Active Campaigns
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow key={vendor.name}>
						<TableCell className="font-medium">
							{vendor.name}
						</TableCell>
						<TableCell>
							{vendor.mediaTypes.map((x) => (
								<Badge
									key={x}
									className="mr-2"
									variant="outline"
								>
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
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
