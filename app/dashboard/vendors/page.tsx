import VendorsTable from "@/components/dashboard/vendors/VendorsTable";
import AddVendorDialog from "@/components/dashboard/vendors/dialog/AddVendorDialog";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Page() {
	return (
		<main>
			<div className="px-6 pt-6 pb-2 gap-4 flex flex-row items-center">
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
			{/* <CardDescription className="px-6">
				Manage your vendors and view their information.
			</CardDescription> */}
			<div className="p-6">
				<VendorsTable />
			</div>
		</main>
	);
}
