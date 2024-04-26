import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function VendorsTable() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Vendors</CardTitle>
				<CardDescription>
					Manage your vendors and view their information.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Media Types</TableHead>
							<TableHead className="hidden md:table-cell">
								Media Count
							</TableHead>
							<TableHead className="hidden md:table-cell">
								Created at
							</TableHead>
							<TableHead>
								<span className="sr-only">Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="hidden sm:table-cell">
								<Image
									alt="Logo image"
									className="aspect-square rounded-md object-contain"
									height="64"
									src="https://assets-global.website-files.com/5dafa392fcdc196abf1f613a/65a719cc3ff184055b42a440_Quill%20Logo_Purple.png"
									width="64"
								/>
							</TableCell>
							<TableCell className="font-medium">Quill</TableCell>
							<TableCell>
								<Badge variant="outline">Podcasts</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								104
							</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-07-12 10:42 AM
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
											<span className="sr-only">
												Toggle menu
											</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>
											Actions
										</DropdownMenuLabel>
										<DropdownMenuItem>
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
			{/* <CardFooter>
				<div className="text-xs text-muted-foreground">
					Showing <strong>1-10</strong> of <strong>32</strong>{" "}
					products
				</div>
			</CardFooter> */}
		</Card>
	);
}
