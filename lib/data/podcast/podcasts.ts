import { promises as fs } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { PodcastInfo } from "@/lib/types";

const headers = [
	"name",
	"publisher",
	"category",
	"Y",
	"original",
	"episodeCount",
	"adPricing",
	"range1",
	"adPositions",
	"DAI",
	"numAdSlots",
	"adsHostRed",
	"episodeDay",
	"primaryCountry",
	"episodesPerWeek",
	"host",
	"genderDistribution",
	"range2",
	"avgHHI",
	"hosting",
	"platforms",
];

export async function getPodcasts() {
	const data = await fs.readFile(
		path.join(process.cwd(), "lib/data/podcast/podcasts.csv")
	);

	const podcasts = parse(data, {
		delimiter: ",",
		columns: headers,
		skip_empty_lines: true,
	}) as PodcastInfo[];
	podcasts.shift();
	podcasts.forEach(
		(x) => (x.adPricing = (x.adPricing as any).replace(/[^0-9.-]+/g, ""))
	);
	return podcasts;
}
