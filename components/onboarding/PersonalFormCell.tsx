import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Label } from "@/components/ui/label";

export default function PersonalFormCell() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Personal</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>Name</Label>
				<Input type="text" placeholder="John Doe" />
			</CardContent>
			<CardContent>
				<Label>Email</Label>
				<Input type="email" placeholder="john@acme.com" />
			</CardContent>
		</Card>
	);
}
