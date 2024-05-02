export type Contact = {
	name: string;
	title?: string;
	email?: string;
	phone?: string;
};

export type BankInfo = {
	name: string;
	address: string;
	type: string;
	accountNumber: number;
	routingNumber: number;
};

export type MediaInfo = {
	name: string;
};

export type PodcastInfo = MediaInfo & {
	publisher: string;
	category: string;
	episodeCount: number;
	original: string;
	adPricing: string;
	adPositions: string;
	numAdSlots: number;
	episodeDay: string;
	primaryCountry: string;
	episodesPerWeek: number;
	host: string;
	genderDistribution: string;
	avgHHI: string;
	hosting: string;
	platforms: string;
};

export type NewsletterInfo = MediaInfo & {
	placement: string;
};

export type AdMedia = {
	podcasts?: PodcastInfo[];
	newsletters?: NewsletterInfo[];
};

export type Vendor = {
	name: string;
	logoURL: string;
	mediaTypes: string[];
	mediaCount: number;
	activeCampaigns: number;
	website: string;
	address: string;
	contact: Contact;
	bankInfo: BankInfo;
};

export type AdCheck = {
	title: string;
	date: string;
	confirmed: boolean;
	totalDownloads: number;
};

export type Campaign = {
	uid: string;
	campaignName: string;
	mediaName: string;
	type: string;
	date: string;
	startDate: string;
	endDate: string;
	mediaBuys: number;
	perUnitCost: number;
	newCost: number;
	contractLink: string;
	leads: number;
	cpm: number;
	netCost: number;
	alerts: number;
	adChecks?: AdCheck[];
};
