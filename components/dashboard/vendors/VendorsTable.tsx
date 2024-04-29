import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import VendorsTableRow from "./VendorsTableRow";
import { vendors } from "@/lib/demoData";

export default function VendorsTable() {
	return (
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
						Active Campaigns
					</TableHead>
					<TableHead>
						<span className="sr-only">Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{vendors.map((x) => (
					<VendorsTableRow key={x.name} vendor={x} />
				))}
			</TableBody>
		</Table>
	);
}
