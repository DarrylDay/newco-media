import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Label } from "@/components/ui/label";

export default function VendorFormCell() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Vendor</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>Contact Name</Label>
				<Input type="text" placeholder="Acme Inc." />
			</CardContent>
			<CardContent>
				<Label>Contact Title</Label>
				<Input type="text" placeholder="CEO" />
			</CardContent>
			<CardContent>
				<Label>Contact Email</Label>
				<Input type="email" placeholder="john@acme.com" />
			</CardContent>
			<CardContent>
				<Label>Contact Phone</Label>
				<Input type="tel" placeholder="415-123-4567" />
			</CardContent>
			<CardContent>
				<Label>Address</Label>
				<Input type="text" placeholder="San Francisco, CA, 94107" />
			</CardContent>
			<CardContent>
				<Label>Signed W-8 or W-9</Label>
				<Input type="file" placeholder="" />
			</CardContent>
		</Card>
	);
}
