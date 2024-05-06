import React from "react";
import { CardTitle } from "../ui/card";
import { FormPageInfo } from "@/lib/types";
import { Check, Dot } from "lucide-react";

export default function FormTitle({
	state,
	pageInfo,
}: {
	state: "waiting" | "current" | "finished";
	pageInfo: FormPageInfo;
}) {
	return (
		<>
			{state == "current" ? (
				<CardTitle className="text-4xl">{pageInfo.title}</CardTitle>
			) : (
				<div
					className={
						(state == "finished"
							? "text-primary"
							: "text-gray-300") + " flex flex-row gap-2"
					}
				>
					{state == "finished" ? <Check /> : <Dot />}
					{pageInfo.title}
				</div>
			)}
		</>
	);
}
