import AdMediaPage from "@/components/onboarding/AdMediaPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
	return (
		<>
			<Card className="overflow-hidden">
				<CardHeader>
					<CardTitle>Review</CardTitle>
				</CardHeader>
				<CardContent>
					Please review your application and submit when ready.
				</CardContent>
			</Card>
		</>
	);
}
