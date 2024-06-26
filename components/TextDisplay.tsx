import Link from "next/link";
import React, { Component } from "react";

export default function TextDisplay({
	title,
	value,
	isLink,
}: {
	title: string;
	value?: string;
	isLink?: boolean;
}) {
	return (
		<div>
			<div className="header-text">{title}</div>
			<div className="value-text">
				{isLink ? (
					<Link href={value ? value : ""} className="underline">
						{value}
					</Link>
				) : (
					value
				)}
			</div>
		</div>
	);
}
