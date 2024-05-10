import React, { Component } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Combobox } from "../../Combobox";
import { Textarea } from "../../ui/textarea";

const yesNoOptions = [
	{
		value: "yes",
		label: "Yes",
	},
	{
		value: "no",
		label: "No",
	},
];

const adPlacementOptions = [
	{
		value: "Pre",
		label: "Pre",
	},
	{
		value: "Mid",
		label: "Mid",
	},
	{
		value: "Post",
		label: "Post",
	},
];

export default function AddManualPodcastForm() {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>Add Podcast</CardTitle>
			</CardHeader>
			<CardContent>
				<Label>Show Name</Label>
				<Input type="text" placeholder="The Podcast" />
			</CardContent>
			<CardContent>
				<Label>Category</Label>
				<Input type="text" placeholder="Technology" />
			</CardContent>
			<CardContent>
				<Label>Exclusive</Label>
				<div>
					<Combobox options={yesNoOptions} />
				</div>
			</CardContent>
			<CardContent>
				<Label>Impressions per Episode</Label>
				<Input type="number" placeholder="6,625" />
			</CardContent>
			<CardContent>
				<Label>Net CPM ($)</Label>
				<Input type="number" placeholder="20.1" />
			</CardContent>
			<CardContent>
				<Label>Net Cost per Episode ($)</Label>
				<Input type="number" placeholder="2,000" />
			</CardContent>
			<CardContent>
				<Label>Ad Unit Length</Label>
				<Input type="text" placeholder=":40-60" />
			</CardContent>
			<CardContent>
				<Label>Ad Unit Placement</Label>
				<Input type="text" placeholder="Pre, Mid, Post" />
				{/* <div>
					<Combobox options={adPlacementOptions} />
				</div> */}
			</CardContent>
			<CardContent>
				<Label>Insertion Method</Label>
				<Input type="text" placeholder="DAI" />
			</CardContent>
			<CardContent>
				<Label>Ad Load / # of Advertisers per Episode</Label>
				<Input type="number" placeholder="3" />
			</CardContent>
			<CardContent>
				<Label>Ad Reader</Label>
				<Input type="text" placeholder="Host" />
			</CardContent>
			<CardContent>
				<Label>Personal Experience Typically Included?</Label>
				<div>
					<Combobox options={yesNoOptions} />
				</div>
			</CardContent>
			<CardContent>
				<Label>Day of Week Show Drops</Label>
				<Input type="text" placeholder="Friday/Thurs" />
			</CardContent>
			<CardContent>
				<Label>Number of Episodes per Week</Label>
				<Input type="number" placeholder="1" />
			</CardContent>
			<CardContent>
				<Label>Talent / Host Names</Label>
				<Input type="text" placeholder="John Doe" />
			</CardContent>
			<CardContent>
				<Label>Gender Demo Info M/F</Label>
				<Input type="text" placeholder="M - 75%" />
			</CardContent>
			<CardContent>
				<Label>Age Demo Info</Label>
				<Input type="text" placeholder="28-45" />
			</CardContent>
			<CardContent>
				<Label>HHI Demo Info (% $100k+)</Label>
				<Input type="text" placeholder="150k+" />
			</CardContent>
			<CardContent>
				<Label>Hosting Platform</Label>
				<Input type="text" placeholder="Megaphone" />
			</CardContent>
			<CardContent>
				<Label>Accepted Pixel Partners</Label>
				<Input type="text" placeholder="Any" />
			</CardContent>
			<CardContent>
				<Label>Simulcast?</Label>
				<div>
					<Combobox options={yesNoOptions} />
				</div>
			</CardContent>
			<CardContent>
				<Label>Social Media Platforms</Label>
				<Input type="text" placeholder="Apple, Spotify" />
			</CardContent>
			<CardContent>
				<Label>Special Notes</Label>
				<Textarea />
			</CardContent>
		</Card>
	);
}
