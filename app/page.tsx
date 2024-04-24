import PersonalFormCell from "@/components/PersonalFormCell";
import VendorFormCell from "@/components/VendorFormCell";
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

export default function Home() {
	return (
		<main className="flex flex-col items-center p-24 w-scren h-screen bg-blue-600">
			<Card className="w-full max-w-[1200px] h-full flex flex-row">
				<div className="flex flex-col gap-2 min-w-[400px] p-8 border-r-2">
					<CardTitle className="text-4xl">Business Detail</CardTitle>
					<Separator orientation="vertical" className="h-4 w-[2px]" />
					<p className="text-gray-300">Bank Information</p>
					<Separator orientation="vertical" className="h-4 w-[2px]" />
					<p className="text-gray-300">Ad Media</p>
				</div>
				<div className="flex-grow rounded-r-lg bg-slate-100">
					<div className="flex flex-col h-full">
						<ScrollArea className="h-full px-4">
							<div className="flex flex-col mt-4 space-y-8 p-4">
								<PersonalFormCell />
								<VendorFormCell />
							</div>
							<ScrollBar orientation="vertical" />
						</ScrollArea>
						<div className="min-h-[80px] bg-white border-t-2 flex items-center justify-end px-4">
							<Button>Save & Continue</Button>
						</div>
					</div>
				</div>
			</Card>
		</main>
	);
}
