import { Combobox } from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
	DialogHeader,
	DialogFooter,
	DialogContent,
	DialogTitle,
	DialogDescription,
	Dialog,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";

const templates = [
	{ value: "podcast", label: "Podcast Vendor" },
	{ value: "newsletter", label: "Newsletter Vendor" },
	{ value: "display", label: "Display Vendor" },
];

export default function AddVendorDialog() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button>Invite Vendor</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-4xl">
						<div>Invite Vendor</div>
					</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-4 mb-2">
					<div>
						<Label>Email</Label>
						<Input type="text" placeholder="john@acme.com" />
					</div>
					<div>
						<Label>Template</Label>
						<div className="flex flex-row gap-4">
							<Combobox
								options={templates}
								defaultValue="podcast"
								useSearch
							/>
							<Button variant="outline">New</Button>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button>Send Invite</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
