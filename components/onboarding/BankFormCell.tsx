import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Label } from "@/components/ui/label";
import { Combobox } from "../Combobox";

const options = [
	{
		value: "checking",
		label: "Checking",
	},
	{
		value: "savings",
		label: "Savings",
	},
];

export default function BankFormCell() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Bank</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>Bank Name</Label>
				<Input type="text" placeholder="Chase" />
			</CardContent>
			<CardContent>
				<Label>Bank Address</Label>
				<Input type="text" placeholder="San Francisco, CA, 94107" />
			</CardContent>
			<CardContent>
				<Label>Account Type</Label>
				<div>
					<Combobox options={options} defaultValue="checking" />
				</div>
			</CardContent>
			<CardContent>
				<Label>Back Account Number</Label>
				<Input type="number" placeholder="1001001234" />
			</CardContent>
			<CardContent>
				<Label>ABA/Routing Number for ACH</Label>
				<Input type="number" placeholder="012345678" />
			</CardContent>
			<CardContent>
				<Label>ABA/Routing Number for Wires (if applicable)</Label>
				<Input type="number" placeholder="012345678" />
			</CardContent>
		</Card>
	);
}
