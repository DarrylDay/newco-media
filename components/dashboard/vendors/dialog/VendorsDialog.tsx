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
import DetailsPage from "./DetailsPage";
import RosterPage from "./RosterPage";

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
						<DetailsPage vendor={vendor} />
					</TabsContent>
					<TabsContent className="w-full h-[300px]" value="roster">
						<RosterPage vendor={vendor} />
					</TabsContent>
				</Tabs>
			</DialogDescription>
		</DialogContent>
	);
}
