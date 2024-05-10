import ContentLayout from "@/components/onboarding/ContentLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import AddPodcastOptions from "@/components/onboarding/podcast/AddPodcastOptions";
import Link from "next/link";

export default function Page() {
	return (
		<ContentLayout
			buttonLayout={
				<>
					<Link href={"/onboarding/media"}>
						<Button variant={"secondary"}>Back</Button>
					</Link>
				</>
			}
		>
			<AddPodcastOptions />
		</ContentLayout>
	);
}
