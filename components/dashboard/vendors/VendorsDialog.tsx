import { Button } from "@/components/ui/button";
import {
	DialogHeader,
	DialogFooter,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Vendor } from "@/lib/types";
import React, { Component } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import TextDisplay from "@/components/TextDisplay";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function VendorsDialog({ vendor }: { vendor: Vendor }) {
	return (
		<DialogContent className="w-full max-w-[1000px]">
			<DialogHeader className="flex flex-row space-x-4">
				<Image
					alt="Logo image"
					className="aspect-square rounded-md object-contain"
					height="64"
					src={vendor.logoURL}
					width="64"
				/>
				<DialogTitle className="text-4xl">
					<div className="mt-1">{vendor.name}</div>
				</DialogTitle>
			</DialogHeader>
			<DialogDescription>
				<Tabs defaultValue="details" className="w-full">
					<TabsList className="mb-2">
						<TabsTrigger className="w-[120px]" value="details">
							Details
						</TabsTrigger>
						<TabsTrigger className="w-[120px]" value="roster">
							Media Roster
						</TabsTrigger>
					</TabsList>
					<Separator />
					<TabsContent
						className="w-full h-[300px] py-4"
						value="details"
					>
						<div className="flex flex-row">
							<div className="flex-1 flex flex-col space-y-4">
								<TextDisplay
									title="Active Campaigns"
									value={vendor.activeCampaigns.toString()}
								/>
								<TextDisplay
									title="Media Count"
									value={vendor.mediaCount.toString()}
								/>
								<TextDisplay
									title="Media Types"
									value={vendor.mediaTypes.join(", ")}
								/>
								<TextDisplay
									title="Website"
									value={vendor.website}
									isLink={true}
								/>
								<TextDisplay
									title="Address"
									value={vendor.address}
								/>
							</div>
							<div className="flex-1 flex flex-col space-y-4">
								<TextDisplay
									title="Contact Name"
									value={vendor.contact.name}
								/>
								<TextDisplay
									title="Contact Title"
									value={vendor.contact.title}
								/>
								<TextDisplay
									title="Contact Email"
									value={vendor.contact.email}
								/>
								<TextDisplay
									title="Contact Phone"
									value={vendor.contact.phone}
								/>
							</div>
							<div className="flex-1 flex flex-col space-y-4">
								<TextDisplay
									title="Bank Name"
									value={vendor.bankInfo.name}
								/>
								<TextDisplay
									title="Bank Address"
									value={vendor.bankInfo.address}
								/>
								<TextDisplay
									title="Bank Type"
									value={vendor.bankInfo.type}
								/>
								<TextDisplay
									title="Account Number"
									value={vendor.bankInfo.accountNumber.toString()}
								/>
								<TextDisplay
									title="Routing Number"
									value={vendor.bankInfo.routingNumber.toString()}
								/>
							</div>
						</div>
					</TabsContent>
					<TabsContent
						className="w-full h-[300px]"
						value="roster"
					></TabsContent>
				</Tabs>
			</DialogDescription>
		</DialogContent>
	);
}
