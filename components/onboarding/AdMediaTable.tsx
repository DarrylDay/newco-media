import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { AddMediaDropdown } from "@/components/onboarding/AddMediaDropdown";
import { Button } from "../ui/button";

export default function AdMediaTable() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle className="relative mb-4">
					<div>Media List</div>
					<div className="absolute right-0 top-0">
						<AddMediaDropdown />
					</div>
					{/* <div className="absolute right-[75px] top-0">
						<Button variant="outline">Upload CSV</Button>
					</div> */}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow>
							<TableHead className="w-[120px]">Type</TableHead>
							<TableHead>Name</TableHead>
							<TableHead className="text-right">
								Net CPM
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">
								Podcast
							</TableCell>
							<TableCell>Request for Startups</TableCell>
							<TableCell className="text-right">$54</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">
								Newsletter
							</TableCell>
							<TableCell>Morning Brew</TableCell>
							<TableCell className="text-right">$23</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
