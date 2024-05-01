"use client";
import NavBar from "@/components/nav/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="fixed hidden md:block w-[220px] lg:w-[260px] h-screen border-r bg-muted/40">
				<NavBar />
			</div>
			<div className="md:ml-[220px] lg:ml-[260px] p-6">{children}</div>
		</>
	);
}
