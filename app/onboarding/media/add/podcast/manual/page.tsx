import AddManualPodcastForm from "@/components/onboarding/podcast/AddManualPodcastForm";
import ContentLayout from "@/components/onboarding/ContentLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Page() {
	return (
		<ContentLayout
			buttonLayout={
				<>
					<Link href={"/onboarding/media/add/podcast"}>
						<Button variant={"secondary"}>Back</Button>
					</Link>
					<Link href={"/onboarding/media"}>
						<Button>Add</Button>
					</Link>
				</>
			}
		>
			<AddManualPodcastForm />
		</ContentLayout>
	);
}
