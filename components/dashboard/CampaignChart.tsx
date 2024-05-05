"use client";
import { campaignChartData } from "@/lib/demoData";
import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function CampaignChart() {
	return (
		<ResponsiveContainer width={"100%"} height={"100%"}>
			<AreaChart
				// width={500}
				// height={400}
				data={campaignChartData}
				margin={{
					top: 10,
					right: 20,
					left: 0,
					bottom: 0,
				}}
				{...{ overflow: "visible" }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey={"day"}
					ticks={[1, 31]}
					domain={[1, 31]}
					allowDataOverflow
					type="number"
					tickLine={false}
					minTickGap={0}
					includeHidden
					tickFormatter={(x) => `Jan ${x}`}
					tickMargin={4}
				/>
				<YAxis width={40} />
				<Tooltip labelFormatter={(x) => `Jan ${x}`} />
				<Area
					type="linear"
					dataKey="creator"
					stackId="1"
					stroke="#2563eb"
					fill="#2563eb"
				/>
				<Area
					type="linear"
					dataKey="podcast"
					stackId="1"
					stroke="#ffc658"
					fill="#ffc658"
				/>
				<Area
					type="linear"
					dataKey="display"
					stackId="1"
					stroke="#8884d8"
					fill="#8884d8"
				/>
				<Area
					type="linear"
					dataKey="newsletter"
					stackId="1"
					stroke="#82ca9d"
					fill="#82ca9d"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}
