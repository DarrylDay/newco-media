"use client";
import React, { Component, useState } from "react";
import AddPodcastForm from "./AddPodcastForm";
import AdMediaTable from "./AdMediaTable";

export default function AdMediaPage() {
	const [addMedia, setAddMedia] = useState<string>();

	return (
		<>
			{addMedia == "Podcast" ? (
				<AddPodcastForm />
			) : (
				<AdMediaTable setAddMedia={setAddMedia} />
			)}
		</>
	);
}
