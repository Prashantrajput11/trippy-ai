import { ITrip } from "@/types";

export const trips: ITrip[] = [
	{
		id: "1",
		name: "Beach Vacation",
		destination: "Maldives",
		date: "June 15 - June 20, 2024",
		type: "Active",
	},
	{
		id: "2",
		name: "Mountain Adventure",
		destination: "Switzerland",
		date: "July 10 - July 18, 2024",
		type: "Upcoming",
	},
	{
		id: "3",
		name: "City Exploration",
		destination: "Tokyo",
		date: "August 5 - August 12, 2024",
		type: "Upcoming",
	},
];

export const travelPurpose = [
	{ id: 1, name: "Leisure" },
	{ id: 2, name: "Business" },
	{ id: 3, name: "Adventure" },
	{ id: 4, name: "Romantic" },
	{ id: 5, name: "Family Trip" },
	{ id: 6, name: "Wellness/Relaxation" },
	{ id: 7, name: "Cultural Exploration" },
];
