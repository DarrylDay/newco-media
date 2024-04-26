import VendorsTable from "@/components/VendorsTable";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<VendorsTable />
		</main>
	);
}
