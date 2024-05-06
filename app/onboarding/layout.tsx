"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormPageInfo } from "@/lib/types";
import FormTitle from "@/components/onboarding/FormTitle";
import { Copy } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const formPages: FormPageInfo[] = [
		{
			title: "Business Details",
			pathname: "/onboarding/business",
		},
		{
			title: "Bank Information",
			pathname: "/onboarding/bank",
		},
		{
			title: "Ad Media Roster",
			pathname: "/onboarding/ad",
		},
		{
			title: "Additional Info",
			pathname: "/onboarding/additional",
		},
		{
			title: "Review & Submit",
			pathname: "/onboarding/review",
		},
	];
	const currentPageIndex = formPages.findIndex((x) => x.pathname == pathname);

	return (
		<>
			<main className="flex flex-col items-center px-24 pb-24 pt-36 w-scren h-screen bg-blue-600">
				<Card className="w-full max-w-[1200px] h-full flex flex-row relative">
					<div className="absolute -top-24 left-0 flex flex-row w-full max-w-[1200px] items-center">
						<Image
							alt="logo"
							width={200}
							height={20}
							src={
								"https://lcmediaagency.com/wp-content/uploads/2023/06/cropped-Cream_without_01-1.png"
							}
						/>
						<div className="grow"></div>
						<Link href={"/"} className="text-white text-xl">
							Powered by <span className="font-bold">NewCo</span>
						</Link>
					</div>
					<div className="flex flex-col gap-2 min-w-[400px] p-8 border-r-2">
						{formPages.map((x, i) => (
							<>
								<FormTitle
									state={
										i < currentPageIndex
											? "finished"
											: i == currentPageIndex
												? "current"
												: "waiting"
									}
									pageInfo={x}
								/>
								{i != formPages.length - 1 ? (
									<Separator
										orientation="vertical"
										className={
											"ml-3 h-4 w-[2px] " +
											(i < currentPageIndex
												? "bg-primary"
												: "")
										}
									/>
								) : (
									<></>
								)}
							</>
						))}
						<div className="grow"></div>
						<Card className="bg-muted/40">
							<CardHeader>
								<CardTitle className="text-lg font-medium">
									Shareable Invite Link
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="rounded-lg border bg-white p-2 flex flex-row items-center gap-2">
									<div> https://newco.com/flasgwgwi</div>
									<div className="grow"></div>
									<Button variant={"ghost"}>
										<Copy
											className="stroke-primary"
											width={16}
										/>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="flex-grow rounded-r-lg bg-muted/40">
						<div className="flex flex-col h-full">
							<ScrollArea className="h-full px-4">
								<div className="flex flex-col mt-4 p-4 gap-4">
									{children}
								</div>
								<ScrollBar orientation="vertical" />
							</ScrollArea>
							<div
								className="min-h-[80px] bg-white border-t-2 rounded-br-lg flex items-center justify-end px-4"
								onClick={() => {
									const index =
										formPages.findIndex(
											(x) => x.pathname == pathname
										) + 1;
									const newPage =
										index < formPages.length
											? formPages[index]
											: formPages[0];
									router.push(newPage.pathname);
								}}
							>
								<Button>
									{currentPageIndex == formPages.length - 1
										? "Submit"
										: "Save & Continue"}
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</main>
		</>
	);
}
