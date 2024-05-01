import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { taskSchema } from "./data/schema";

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

export default async function Table() {
	const tasks = await getTasks();

	return (
		<>
			<DataTable data={tasks} columns={columns} />
		</>
	);
}
