import BankFormCell from "@/components/onboarding/BankFormCell";
import ContentLayout from "@/components/onboarding/ContentLayout";
import ReceivableFormCell from "@/components/onboarding/ReceivableFormCell";
import React from "react";

export default function page() {
	return (
		<ContentLayout>
			<ReceivableFormCell />
			<BankFormCell />
		</ContentLayout>
	);
}
