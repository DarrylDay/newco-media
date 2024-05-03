import {
	Bell,
	ChevronDown,
	Cog,
	Home,
	LifeBuoy,
	LogOut,
	MicVocal,
	Package2,
	Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const pathname = usePathname();

	return (
		<div className="flex h-full max-h-screen flex-col gap-2">
			<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
				<Link
					href="/"
					className="flex items-center gap-2 font-semibold"
				>
					<Package2 className="h-6 w-6" />
					<span className="">NewCo</span>
				</Link>
				<Button
					variant="outline"
					size="icon"
					className="ml-auto h-8 w-8"
				>
					<Bell className="h-4 w-4" />
					<span className="sr-only">Toggle notifications</span>
				</Button>
			</div>
			<div className="flex-1">
				<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard" ? "bg-muted" : ""
						}`}
					>
						<Home className="h-4 w-4" />
						Dashboard
					</Link>
					<Link
						href="/dashboard/vendors"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard/vendors" ? "bg-muted" : ""
						}`}
					>
						<Users className="h-4 w-4" />
						Vendors
					</Link>
					<Link
						href="/dashboard/media"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard/media" ? "bg-muted" : ""
						}`}
					>
						<MicVocal className="h-4 w-4" />
						Media
					</Link>
				</nav>
			</div>
			<div className="flex">
				<nav className="grid items-start px-2 text-sm font-medium lg:px-4 w-full my-4">
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 font-black text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard/test" ? "bg-muted" : ""
						}`}
					>
						<Cog className="h-4 w-4" />
						Settings
						<div className="grow"></div>
						<ChevronDown className="h-4" />
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Workspace
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Profile
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Members
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Notifications
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Billing
					</Link>
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg pl-10 py-2 text-muted-foreground transition-all hover:text-primary`}
					>
						Invoices
					</Link>
					<Separator className="my-4" />
					<Link
						href="/dashboard"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard/test" ? "bg-muted" : ""
						}`}
					>
						<LogOut className="h-4 w-4" />
						Sign out
					</Link>
					<Link
						href="/onboarding"
						className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
							pathname == "/dashboard/test" ? "bg-muted" : ""
						}`}
					>
						<LifeBuoy className="h-4 w-4" />
						Support
					</Link>
				</nav>
			</div>
		</div>
	);
}
