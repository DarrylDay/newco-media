import { VendorsTable } from "@/components/dashboard/vendors/table/VendorsTable";
import AddVendorDialog from "@/components/dashboard/vendors/dialog/AddVendorDialog";
import { CardTitle } from "@/components/ui/card";
import { vendors } from "@/lib/demoData";

export default function Page() {
	return (
		<div className="w-full flex flex-row justify-center">
			<main className="w-full max-w-[1500px]">
				<div className="gap-4 flex flex-row items-center">
					<CardTitle>Vendors</CardTitle>
					<div className="grow"></div>
					<AddVendorDialog />
				</div>
				<div className="py-6">
					<VendorsTable data={vendors} />
				</div>
			</main>
		</div>
	);
}
