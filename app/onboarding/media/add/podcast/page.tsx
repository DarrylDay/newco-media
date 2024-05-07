"use client";
import AddManualPodcastForm from "@/components/onboarding/AddManualPodcastForm";
import ContentLayout from "@/components/onboarding/ContentLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
	const router = useRouter();

	return (
		<ContentLayout
			buttonLayout={
				<>
					<Button
						variant={"secondary"}
						onClick={() => {
							router.push("/onboarding/media");
						}}
					>
						Back
					</Button>
					<Button
						onClick={() => {
							router.push("/onboarding/media");
						}}
					>
						Add
					</Button>
				</>
			}
		>
			<AddManualPodcastForm />
		</ContentLayout>
	);
}
