import React, { Component } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default class AddPodcastForm extends Component {
	render() {
		return (
			<Card className="overflow-hidden">
				<CardHeader>
					<CardTitle>Add Podcast</CardTitle>
				</CardHeader>
				<CardContent>
					<Label>Show Name</Label>
					<Input type="text" placeholder="Upstream" />
				</CardContent>
				<CardContent>
					<Label>Category</Label>
					<Input type="text" placeholder="Technology" />
				</CardContent>
				<CardContent>
					<Label>Exclusive</Label>
					<Input type="text" placeholder="Yes" />
				</CardContent>
				<CardContent>
					<Label>Impressions per Episode</Label>
					<Input type="number" placeholder="6,625" />
				</CardContent>
			</Card>
		);
	}
}
