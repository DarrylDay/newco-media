import ContentLayout from "@/components/onboarding/ContentLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import AddPodcastSimplecast from "@/components/onboarding/podcast/AddPodcastSimplecast";

export default function Page() {
	return (
		<ContentLayout
			buttonLayout={
				<>
					<Link href={"/onboarding/media/add/podcast"}>
						<Button variant={"secondary"}>Back</Button>
					</Link>
				</>
			}
		>
			<AddPodcastSimplecast />
		</ContentLayout>
	);
}
