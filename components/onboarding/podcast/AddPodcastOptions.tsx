import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AddPodcastOptions() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Add Podcast</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="font-medium text-xl">Real-Time Data</div>
				<CardDescription>
					Connect your podcast hosting provider to provide real-time
					data.
				</CardDescription>
			</CardContent>
			<CardContent className="pb-3">
				<Link href={"podcast/simplecast"}>
					<Button className="w-full bg-black text-white hover:bg-gray-800">
						<span className="mr-2">
							<Image
								width={18}
								height={18}
								alt="simplecast logo"
								src={
									"https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/a0gqxn9hjpdvdsbn2i40"
								}
							/>
						</span>
						Connect Simplecast
					</Button>
				</Link>
			</CardContent>
			<CardContent className="pb-3">
				<Link href={"podcast/podbean"}>
					<Button className="w-full bg-black text-white hover:bg-gray-800">
						<span className="mr-2">
							<Image
								width={18}
								height={18}
								alt="podbean logo"
								src={
									"https://d8g345wuhgd7e.cloudfront.net/site/images/admin5/pblogo.png"
								}
							/>
						</span>
						Connect Podbean
					</Button>
				</Link>
			</CardContent>
			<CardContent>
				<Link href={"podcast/megaphone"}>
					<Button className="w-full bg-black text-white hover:bg-gray-800">
						<span className="mr-2">
							<Image
								width={18}
								height={18}
								alt="simplecast logo"
								src={"/images/Megaphone.png"}
							/>
						</span>
						Connect Megaphone
					</Button>
				</Link>
			</CardContent>
			<CardContent>
				<Separator />
			</CardContent>
			<CardContent>
				<div className="font-medium text-xl">Static Data</div>
				<CardDescription>
					Data will need regular manual updating.
				</CardDescription>
			</CardContent>
			<CardContent className="pb-3">
				<Button className="w-full" variant={"secondary"}>
					<span>
						<Upload size={18} className="mr-2" />
					</span>
					Upload CSV
				</Button>
			</CardContent>
			<CardContent>
				<Link href={"podcast/manual"}>
					<Button className="w-full" variant={"secondary"}>
						Manual Input
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
