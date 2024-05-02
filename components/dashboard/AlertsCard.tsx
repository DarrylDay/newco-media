"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AlertChart from "./AlertChart";
import { campaigns } from "@/lib/demoData";

export default function AlertsCard() {
	const totalAlerts = campaigns.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.alerts;
	}, 0);

	return (
		<Card className="w-[250px] h-[200px] flex flex-col">
			<CardHeader className="pb-2 flex flex-row space-y-0">
				<CardTitle className="text-lg">Alerts</CardTitle>
			</CardHeader>
			<CardContent className="grow relative">
				<AlertChart />
				<div className="absolute left-[115px] bottom-[35px]">
					<div className="font-bold text-4xl">{totalAlerts}</div>
				</div>
			</CardContent>
		</Card>
	);
}
