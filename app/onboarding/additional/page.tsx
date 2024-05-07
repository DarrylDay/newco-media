import AdMediaPage from "@/components/onboarding/AdMediaPage";
import ContentLayout from "@/components/onboarding/ContentLayout";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
	return (
		<ContentLayout>
			<Card className="overflow-hidden">
				<CardHeader>
					<CardTitle>Additional Info</CardTitle>
					<CardDescription>
						Please provide any additional information that you would
						like to share.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="files">Message</Label>
						<Textarea
							placeholder="Type your message here."
							className="min-h-[150px]"
						/>
					</div>
				</CardContent>
				<CardContent>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="files">Documents</Label>
						<Input id="files" type="file" />
					</div>
				</CardContent>
			</Card>
		</ContentLayout>
	);
}
