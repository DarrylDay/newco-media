import VendorsTable from "@/components/dashboard/vendors/VendorsTable";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<main>
			<CardTitle className="px-6 pt-6 pb-2">Vendors</CardTitle>
			<CardDescription className="px-6">
				Manage your vendors and view their information.
			</CardDescription>
			<div className="p-6">
				<VendorsTable />
			</div>
		</main>
	);
}
