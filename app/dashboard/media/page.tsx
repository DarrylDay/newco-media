import { PodcastTable } from "@/components/dashboard/media/PodcastTable";
import { CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPodcasts } from "@/lib/data/podcast/podcasts";

export default async function Page() {
	const podcasts = await getPodcasts();

	return (
		<main className="w-full flex flex-col">
			<div className="h-[40px] flex flex-row gap-4 items-center">
				<CardTitle>Media</CardTitle>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="podcast" className="">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="podcast">Podcast</TabsTrigger>
						<TabsTrigger value="newsletter">Newsletter</TabsTrigger>
						<TabsTrigger value="creator">Creator</TabsTrigger>
						<TabsTrigger value="display">Display</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
			<div className="pt-3">
				<PodcastTable data={podcasts} />
			</div>
		</main>
	);
}
