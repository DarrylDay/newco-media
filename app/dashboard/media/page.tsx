import { AllMediaTable } from "@/components/dashboard/media/all/AllMediaTable";
import { NewsletterTable } from "@/components/dashboard/media/newsletter/NewsletterTable";
import { PodcastTable } from "@/components/dashboard/media/podcast/PodcastTable";
import { CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getNewsletters } from "@/lib/data/newsletter/newsletters";
import { getPodcasts } from "@/lib/data/podcast/podcasts";
import { MediaInfo } from "@/lib/types";
import { Suspense } from "react";

export default async function Page() {
	const podcasts = await getPodcasts();
	const newsletters = await getNewsletters();
	const allMedia = (podcasts as MediaInfo[]).concat(newsletters);

	return (
		<main className="w-full flex flex-col">
			<div className="h-[40px] flex flex-row gap-4 items-center">
				<CardTitle>Media</CardTitle>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="all" className="">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="podcast">Podcast</TabsTrigger>
						<TabsTrigger value="newsletter">Newsletter</TabsTrigger>
						<TabsTrigger value="creator">Creator</TabsTrigger>
						<TabsTrigger value="display">Display</TabsTrigger>
					</TabsList>
					<TabsContent value="all">
						<div className="pt-1">
							<Suspense>
								<AllMediaTable data={allMedia} />
							</Suspense>
						</div>
					</TabsContent>
					<TabsContent value="podcast">
						<div className="pt-1">
							<Suspense>
								<PodcastTable data={podcasts} />
							</Suspense>
						</div>
					</TabsContent>
					<TabsContent value="newsletter">
						<div className="pt-1">
							<Suspense>
								<NewsletterTable data={newsletters} />
							</Suspense>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
