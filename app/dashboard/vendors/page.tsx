import VendorsTable from "@/components/dashboard/vendors/VendorsTable";
import AddVendorDialog from "@/components/dashboard/vendors/dialog/AddVendorDialog";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

export default function Page() {
	return (
		<div className="w-full flex flex-row justify-center">
			<main className="w-full max-w-[1500px]">
				<div className="gap-4 flex flex-row items-center">
					<CardTitle>Vendors</CardTitle>
					<div className="grow"></div>
					<div className="relative ml-auto flex-1 md:grow-0">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
						/>
					</div>
					<AddVendorDialog />
				</div>
				<div className="py-6">
					<VendorsTable />
				</div>
			</main>
		</div>
	);
}
