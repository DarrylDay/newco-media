"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 1000 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	// { name: "Group D", value: 200 },
];
const COLORS = ["#E5484D", "#FFBB28", "#00C49F"];

export default class AlertChart extends PureComponent {
	render() {
		return (
			<PieChart width={200} height={120}>
				<Pie
					data={data}
					cx={95}
					cy={100}
					startAngle={180}
					endAngle={0}
					innerRadius={70}
					outerRadius={90}
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
		);
	}
}
