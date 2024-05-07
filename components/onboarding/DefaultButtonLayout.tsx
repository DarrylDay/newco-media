"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { formPages } from "@/lib/demoData";

export function DefaultButtonLayout({ title }: { title?: string }) {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<>
			<Button
				onClick={() => {
					const index =
						formPages.findIndex((x) => x.pathname == pathname) + 1;
					const newPage =
						index < formPages.length
							? formPages[index]
							: formPages[0];
					router.push(newPage.pathname);
				}}
			>
				{title ? title : "Save & Continue"}
			</Button>
		</>
	);
}
