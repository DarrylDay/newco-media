"use client";
import React, { PureComponent } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		day: 1,
		display: 0,
		newsletter: 0,
		creator: 0,
		podcast: 0,
	},
	{
		day: 2,
		display: 3,
		newsletter: 1,
		creator: 0,
		podcast: 4,
	},
	{
		day: 3,
		display: 8,
		newsletter: 2,
		creator: 20,
		podcast: 6,
	},
	{
		day: 4,
		display: 10,
		newsletter: 2,
		creator: 42,
		podcast: 15,
	},
	{
		day: 5,
		display: 13,
		newsletter: 3,
		creator: 67,
		podcast: 19,
	},
	{
		day: 6,
		display: 13,
		newsletter: 3,
		creator: 71,
		podcast: 21,
	},
	{
		day: 7,
		display: 17,
		newsletter: 4,
		creator: 81,
		podcast: 24,
	},
];

export default class CampaignChart extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					// width={500}
					// height={400}
					data={data}
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
						ticks={[
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
							16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
							29, 30, 31,
						]}
						domain={[1, 31]}
						allowDataOverflow
						type="number"
						tickLine={false}
						minTickGap={0}
						includeHidden
						tickFormatter={(x) => `Jan ${x}`}
						angle={45}
						tickMargin={2}
						textAnchor="start"
					/>
					<YAxis width={40} />
					<Tooltip />
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
}
