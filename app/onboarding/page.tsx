"use client";
import AdMediaPage from "@/components/onboarding/AdMediaPage";
import AdMediaTable from "@/components/onboarding/AdMediaTable";
import AddPodcastForm from "@/components/onboarding/AddPodcastForm";
import BankFormCell from "@/components/onboarding/BankFormCell";
import PersonalFormCell from "@/components/onboarding/PersonalFormCell";
import ReceivableFormCell from "@/components/onboarding/ReceivableFormCell";
import VendorFormCell from "@/components/onboarding/VendorFormCell";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const pages = [
	{
		comps: (
			<>
				<PersonalFormCell />
				<VendorFormCell />
			</>
		),
	},
	{
		comps: (
			<>
				<ReceivableFormCell />
				<BankFormCell />
			</>
		),
	},
	{
		comps: (
			<>
				<AdMediaPage />
			</>
		),
	},
];

export default function Page() {
	const [section, setSection] = useState<"business" | "bank" | "ad">(
		"business"
	);

	return (
		<main className="flex flex-col items-center p-24 w-scren h-screen bg-muted">
			<Card className="w-full max-w-[1200px] h-full flex flex-row relative">
				<div className="absolute right-0 -top-8">
					<p>Powered by NewCo</p>
				</div>
				<div className="flex flex-col gap-2 min-w-[400px] p-8 border-r-2">
					{section == "business" ? (
						<CardTitle className="text-4xl">
							Business Detail
						</CardTitle>
					) : (
						<p className="text-gray-300">Business Detail</p>
					)}
					<Separator orientation="vertical" className="h-4 w-[2px]" />
					{section == "bank" ? (
						<CardTitle className="text-4xl">
							Bank Information
						</CardTitle>
					) : (
						<p className="text-gray-300">Bank Information</p>
					)}
					<Separator orientation="vertical" className="h-4 w-[2px]" />
					{section == "ad" ? (
						<CardTitle className="text-4xl">Ad Media</CardTitle>
					) : (
						<p className="text-gray-300">Ad Media</p>
					)}
				</div>
				<div className="flex-grow rounded-r-lg bg-muted/40">
					<div className="flex flex-col h-full">
						<ScrollArea className="h-full px-4">
							<div className="flex flex-col mt-4 space-y-8 p-4">
								{/* <PersonalFormCell />
								<VendorFormCell /> */}
								{section == "business"
									? pages[0].comps
									: section == "bank"
									? pages[1].comps
									: pages[2].comps}
							</div>
							<ScrollBar orientation="vertical" />
						</ScrollArea>
						<div
							className="min-h-[80px] bg-white border-t-2 rounded-br-lg flex items-center justify-end px-4"
							onClick={() => {
								if (section == "business") setSection("bank");
								else if (section == "bank") setSection("ad");
								else if (section == "ad")
									setSection("business");
							}}
						>
							<Button>Save & Continue</Button>
						</div>
					</div>
				</div>
			</Card>
		</main>
	);
}
