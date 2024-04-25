import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function ReceivableFormCell() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Receivable Contact</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>Payee Name</Label>
				<Input type="text" placeholder="John Doe" />
			</CardContent>
			<CardContent>
				<Label>Mailing Address</Label>
				<Input type="text" placeholder="San Francisco, CA, 94107" />
			</CardContent>
			<CardContent>
				<Label>Accounts Receivable Contact Name</Label>
				<Input type="text" placeholder="John Doe" />
			</CardContent>
			<CardContent>
				<Label>Accounts Receivable Contact Email</Label>
				<Input type="email" placeholder="john@acme.com" />
			</CardContent>
			<CardContent>
				<Label>Accounts Receivable Contact Phone Number</Label>
				<Input type="tel" placeholder="415-123-4567" />
			</CardContent>
			<CardContent>
				<div className="items-top flex space-x-2">
					<Checkbox id="terms1" />
					<div className="grid gap-1.5 leading-none">
						<label
							htmlFor="terms1"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Accept{" "}
							<Link href="#" className="underline">
								Invoicing Guidelines
							</Link>
						</label>
						<p className="text-sm text-muted-foreground">
							Please confirm the invoicing guidelines have been
							reviewed and sent to appropriate internal parties
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
