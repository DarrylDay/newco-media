"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Podcast = {
	uuid: string;
	name: string;
	downloads: number;
};

export default function AddPodcastSimplecast() {
	const [token, setToken] = useState("");
	const [podcasts, setPodcasts] = useState<Podcast[]>();
	async function getPodcasts() {
		const res = await fetch("https://api.simplecast.com/podcasts?limit=5", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
			},
		});

		if (res.ok) {
			const json = await res.json();
			const podcasts = (json.collection as any[]).map((x) => {
				return {
					uuid: x.id,
					name: x.title,
					downloads: 0,
				};
			});

			await podcasts.forEach(async (x) => {
				const res = await fetch(
					"https://api.simplecast.com/analytics/downloads?podcast=" +
						x.uuid,
					{
						method: "GET",
						headers: {
							Authorization: "Bearer " + token,
						},
					}
				);

				if (res.ok) {
					const json = await res.json();
					console.log(json);
					x.downloads = json.total as number;
				}

				// temp hack
				setPodcasts(podcasts.map((x) => x));
			});
		}
	}

	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Connect Simplecast</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>API Token</Label>
				<div className="flex flex-row gap-4">
					<Input
						type="text"
						placeholder="Your simplecast API token..."
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>
					<Button onClick={getPodcasts} disabled={token == ""}>
						Connect
					</Button>
				</div>
			</CardContent>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead className="text-right">
								Total Downloads
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{podcasts ? (
							podcasts.map((x) => (
								<TableRow key={x.uuid}>
									<TableCell>{x.name}</TableCell>
									<TableCell className="text-right">
										{x.downloads}
									</TableCell>
								</TableRow>
							))
						) : (
							<></>
						)}
						{/* <TableRow>
							<TableCell>Request for Startups</TableCell>
							<TableCell className="text-right">1024</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Morning Brew</TableCell>
							<TableCell className="text-right">20104</TableCell>
						</TableRow> */}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
