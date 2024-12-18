export type TripType =
	| "All"
	| "Upcoming"
	| "Completed"
	| "Active"
	| "Cancelled";

export interface ITrip {
	id: string;
	name: string;
	destination: string;
	date: string;
	type: TripType;
}

export interface IFormData {
	travelPreference: string;
	budget: string;
	group: string;
}
