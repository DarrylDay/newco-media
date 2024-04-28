import { Vendor } from "./types";

export const vendors: Vendor[] = [
	{
		name: "Quill",
		logoURL:
			"https://assets-global.website-files.com/5dafa392fcdc196abf1f613a/65a719cc3ff184055b42a440_Quill%20Logo_Purple.png",
		mediaTypes: ["Podcast", "Newsletter"],
		mediaCount: 100,
		activeCampaigns: 2,
		address: "300 4th St, San Francisco, CA 94107",
		website: "https://www.quillpodcasting.com/",
		contact: {
			name: "John Doe",
			title: "CEO",
			email: "john@quill",
			phone: "415-123-4567",
		},
		bankInfo: {
			name: "Chase",
			address: "300 4th St, San Francisco, CA 94107",
			type: "Checking",
			accountNumber: 1001001234,
			routingNumber: 12345678,
		},
		adMedia: {
			podcasts: [
				{
					name: "Request for Startups",
					length: 4,
				},
			],
		},
	},
];
