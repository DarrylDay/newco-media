import BankFormCell from "@/components/onboarding/BankFormCell";
import ReceivableFormCell from "@/components/onboarding/ReceivableFormCell";
import React from "react";

export default function page() {
	return (
		<>
			<ReceivableFormCell />
			<BankFormCell />
		</>
	);
}
