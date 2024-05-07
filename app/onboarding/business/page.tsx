import ContentLayout from "@/components/onboarding/ContentLayout";
import PersonalFormCell from "@/components/onboarding/PersonalFormCell";
import VendorFormCell from "@/components/onboarding/VendorFormCell";
import React from "react";

export default function Page() {
	return (
		<ContentLayout>
			<PersonalFormCell />
			<VendorFormCell />
		</ContentLayout>
	);
}
