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
	{
		id: 2,
		name: "Economy",
		emoji: "💵",
		description: "Moderate spending for cost-conscious travelers.",
	},
	{
		id: 3,
		name: "Moderate",
		emoji: "💳",
		description: "Balanced spending with comfort.",
	},
	{
		id: 4,
		name: "Luxury",
		emoji: "💎",
		description: "Experience premium travel and indulgence.",
	},
];

export const travelGroups = [
	{
		id: 1,
		name: "Solo",
		emoji: "🧍",
		description: "Explore the world on your own terms.",
	},
	{
		id: 2,
		name: "Couple",
		emoji: "❤️",
		description: "A romantic getaway for two.",
	},
	{
		id: 3,
		name: "Family with Kids",
		emoji: "👨‍👩‍👧‍👦",
		description: "Fun-filled family adventures.",
	},
	{
		id: 4,
		name: "Friends",
		emoji: "👫",
		description: "Unforgettable trips with your besties.",
	},
	{
		id: 5,
		name: "Group Tour",
		emoji: "🧑‍🤝‍🧑",
		description: "Shared experiences with like-minded travelers.",
	},
];
