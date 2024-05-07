import { promises as fs } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { NewsletterInfo } from "@/lib/types";

const headers = [
	"name",
	"publisher",
	"category",
	"adPricing",
	"placement",
	"primaryCountry",
	"episodeDay",
];

export async function getNewsletters() {
	const data = await fs.readFile(
		path.join(process.cwd(), "lib/data/newsletter/newsletters.csv")
	);

	const podcasts = parse(data, {
		delimiter: ",",
		columns: headers,
		skip_empty_lines: true,
	}) as NewsletterInfo[];
	podcasts.shift();
	podcasts.forEach((x) => {
		x.adPricing = (x.adPricing as any).replace(/[^0-9.-]+/g, "");
		x.mediaType = "Newsletter";
	});
	const names = podcasts.map((x) => x.name);
	return podcasts.filter((x, i, a) => names.indexOf(x.name) == i);
}
