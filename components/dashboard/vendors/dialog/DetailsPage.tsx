import TextDisplay from "@/components/TextDisplay";
import { Vendor } from "@/lib/types";
import React from "react";

export default function DetailsPage({ vendor }: { vendor: Vendor }) {
	return (
		<div className="flex flex-row">
			<div className="flex-1 flex flex-col space-y-4">
				<TextDisplay
					title="Active Campaigns"
					value={vendor.activeCampaigns.toString()}
				/>
				<TextDisplay
					title="Media Count"
					value={vendor.mediaCount.toString()}
				/>
				<TextDisplay
					title="Media Types"
					value={vendor.mediaTypes.join(", ")}
				/>
				<TextDisplay
					title="Website"
					value={vendor.website}
					isLink={true}
				/>
				<TextDisplay title="Address" value={vendor.address} />
			</div>
			<div className="flex-1 flex flex-col space-y-4">
				<TextDisplay title="Contact Name" value={vendor.contact.name} />
				<TextDisplay
					title="Contact Title"
					value={vendor.contact.title}
				/>
				<TextDisplay
					title="Contact Email"
					value={vendor.contact.email}
				/>
				<TextDisplay
					title="Contact Phone"
					value={vendor.contact.phone}
				/>
			</div>
			<div className="flex-1 flex flex-col space-y-4">
				<TextDisplay title="Bank Name" value={vendor.bankInfo.name} />
				<TextDisplay
					title="Bank Address"
					value={vendor.bankInfo.address}
				/>
				<TextDisplay title="Bank Type" value={vendor.bankInfo.type} />
				<TextDisplay
					title="Account Number"
					value={vendor.bankInfo.accountNumber.toString()}
				/>
				<TextDisplay
					title="Routing Number"
					value={vendor.bankInfo.routingNumber.toString()}
				/>
			</div>
		</div>
	);
}
