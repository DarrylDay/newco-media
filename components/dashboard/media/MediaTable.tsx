import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { parse } from "csv-parse/sync";

import { columns2 } from "./table/columns";
import { DataTable } from "./table/data-table";
import { taskSchema } from "./table/data/schema";
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

// Simulate a database read for tasks.
async function getTasks() {
	const data = await fs.readFile(
		path.join(
			process.cwd(),
			"components/dashboard/media/table/data/tasks.json"
		)
	);

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

async function getPodcasts() {
	const data = await fs.readFile(
		path.join(process.cwd(), "lib/data/podcast/podcasts.csv")
	);

	const podcasts = parse(data, {
		delimiter: ",",
		columns: headers,
		skip_empty_lines: true,
	}) as PodcastInfo[];
	podcasts.shift();
	return podcasts;
}

export default async function MediaTable() {
	const tasks = await getTasks();
	const podcasts = await getPodcasts();

	return (
		<>
			<DataTable data={podcasts} columns={columns2} />
		</>
	);
}