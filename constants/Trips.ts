import { ITrip } from "@/types";

export const trips: ITrip[] = [
	{
		id: "1",
		name: "Beach Vacation",
		destination: "Maldives",
		date: "June 15 - June 20, 2024",
		type: "Active",
		country: "Australia",
	},
	{
		id: "2",
		name: "Mountain Adventure",
		destination: "Switzerland",
		date: "Jul 10 - Jul 18, 2024",
		type: "Upcoming",
		country: "Maldives",
	},
	{
		id: "3",
		name: "City Exploration",
		destination: "Tokyo",
		date: "Aug 5 - Aug 12, 2024",
		type: "Upcoming",
		country: "Italy",
	},
];

export const travelPurpose = [
	{ id: 1, name: "Adventure Travel", emoji: "🧗‍♂️" },
	{ id: 2, name: "City Breaks", emoji: "🏙️" },
	{ id: 3, name: "Cultural Exploration", emoji: "🏛️" },
	{ id: 4, name: "Glamping", emoji: "🏕️" },
	{ id: 5, name: "Beach Vacations", emoji: "🏖️" },
	{ id: 6, name: "Nature Escapes", emoji: "🌿" },
	{ id: 7, name: "Relaxing Getaways", emoji: "🏝️" },
	{ id: 8, name: "Road Trips", emoji: "🚗" },
	{ id: 9, name: "Food Tourism", emoji: "🍔" },
	{ id: 10, name: "Backpacking", emoji: "🎒" },
	{ id: 11, name: "Cruise Vacations", emoji: "🛳️" },
	{ id: 12, name: "Staycations", emoji: "🏡" },
	{ id: 13, name: "Skiing/Snowboarding", emoji: "🎿" },
	{ id: 14, name: "Wine Tours", emoji: "🍷" },
	{ id: 15, name: "Wildlife Safaris", emoji: "🦁" },
	{ id: 16, name: "Art Galleries", emoji: "🖼️" },
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
