"use client";
import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		day: 1,
		spend: 0,
	},
	{
		day: 6,
		spend: 6,
	},
	{
		day: 10,
		spend: 6.5,
	},
];

const budgetLineData = [
	{
		day: 1,
		spend: 10,
	},
	{
		day: 31,
		spend: 10,
	},
];

const projectedLineData = [
	{
		day: 10,
		spend: 6.5,
	},
	{
		day: 31,
		spend: 8.5,
	},
];

export default class BudgetChart extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 5,
						left: 5,
						bottom: 5,
					}}
				>
					<XAxis
						dataKey="day"
						xAxisId={0}
						type="number"
						domain={[1, 31]}
						allowDataOverflow
						tickFormatter={(x) => `Jan ${x}`}
						ticks={[1, 31]}
						tickLine={false}
						minTickGap={0}
						includeHidden
					/>
					<YAxis tick={false} width={1} domain={[0, 15]} />
					<Tooltip />
					<Line
						type="linear"
						dataKey="spend"
						stroke="#2563eb"
						strokeWidth={3}
						dot={false}
					/>
					<Line
						type="linear"
						dataKey="spend"
						stroke="#AAAAAA"
						strokeWidth={2}
						dot={false}
						data={budgetLineData}
					/>
					<Line
						type="linear"
						dataKey="spend"
						stroke="#AAAAAA"
						strokeWidth={2}
						dot={false}
						data={projectedLineData}
						strokeDasharray="4 4"
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
