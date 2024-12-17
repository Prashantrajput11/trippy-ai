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
	{ id: 1, name: "Leisure", emoji: "🌴" },
	{ id: 2, name: "Business", emoji: "💼" },
	{ id: 3, name: "Adventure", emoji: "🏞️" },
	{ id: 4, name: "Romantic", emoji: "❤️" },
	{ id: 5, name: "Family Trip", emoji: "👨‍👩‍👧‍👦" },
	{ id: 6, name: "Wellness/Relaxation", emoji: "🧘" },
	{ id: 7, name: "Cultural Exploration", emoji: "🏛️" },
];

export const budgetCategories = [
	{ id: 1, name: "Budget", emoji: "💸" },
	{ id: 2, name: "Economy", emoji: "💵" },
	{ id: 3, name: "Moderate", emoji: "💳" },
	{ id: 4, name: "Luxury", emoji: "💎" },
];

export const travelGroups = [
	{ id: 1, name: "Solo", emoji: "🧍" },
	{ id: 2, name: "Couple", emoji: "❤️" },
	{ id: 3, name: "Family with Kids", emoji: "👨‍👩‍👧‍👦" },
	{ id: 4, name: "Friends", emoji: "👫" },
	{ id: 5, name: "Group Tour", emoji: "🧑‍🤝‍🧑" },
];
