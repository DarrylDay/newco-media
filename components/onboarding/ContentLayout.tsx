import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { DefaultButtonLayout } from "./DefaultButtonLayout";
import { FormPageInfo } from "@/lib/types";
import { formPages } from "@/lib/demoData";

export default function ContentLayout({
	children,
	buttonLayout,
}: {
	children: React.ReactNode;
	buttonLayout?: React.ReactNode;
}) {
	return (
		<>
			<ScrollArea className="h-full px-4">
				<div className="flex flex-col mt-4 p-4 gap-4">{children}</div>
				<ScrollBar orientation="vertical" />
			</ScrollArea>
			<div className="min-h-[80px] bg-white border-t-2 rounded-br-lg flex items-center justify-end px-4 gap-4">
				{buttonLayout ? buttonLayout : <DefaultButtonLayout />}
			</div>
		</>
	);
}
