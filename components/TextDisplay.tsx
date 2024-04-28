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
			<div className="font-medium">{title}</div>
			<div className="hidden text-sm text-muted-foreground md:inline">
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
