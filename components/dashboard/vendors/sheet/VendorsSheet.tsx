import { Vendor } from "@/lib/types";
import React from "react";
import Image from "next/image";
import DetailsPage from "../dialog/DetailsPage";
import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import TextDisplay from "@/components/TextDisplay";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function VendorsSheet({ vendor }: { vendor?: Vendor }) {
	return (
		<SheetContent>
			<SheetHeader className="flex flex-row space-x-4">
				<Image
					alt="Logo image"
					className="aspect-square rounded-md object-contain"
					height="64"
					src={vendor?.logoURL ? vendor.logoURL : ""}
					width="64"
				/>
				<SheetTitle className="text-4xl">
					<div className="mt-1">{vendor?.name}</div>
				</SheetTitle>
			</SheetHeader>
			<SheetDescription>
				<div className="flex flex-col space-y-4 mt-4">
					<Button>View Media Roster</Button>
					<div className="font-bold text-xl">Info</div>
					<TextDisplay
						title="Website"
						value={vendor?.website}
						isLink={true}
					/>
					<TextDisplay
						title="Active Campaigns"
						value={vendor?.activeCampaigns.toString()}
					/>
					<TextDisplay
						title="Media Count"
						value={vendor?.mediaCount.toString()}
					/>
					<TextDisplay
						title="Media Types"
						value={vendor?.mediaTypes.join(", ")}
					/>
					<TextDisplay
						title="Company Address"
						value={vendor?.address}
					/>
					<Separator />
					<div className="font-bold text-xl">Contact</div>
					<TextDisplay title="Name" value={vendor?.contact.name} />
					<TextDisplay title="Title" value={vendor?.contact.title} />
					<TextDisplay title="Email" value={vendor?.contact.email} />
					<TextDisplay title="Phone" value={vendor?.contact.phone} />
				</div>
			</SheetDescription>
		</SheetContent>
	);
}
