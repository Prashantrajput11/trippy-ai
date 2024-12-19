// Function to get counts for each category
const getCounts = (trips) => {
	const now = new Date();

	return {
		all: trips.length,
		active: trips.filter((trip) => {
			const startDate = new Date(trip.startDate);
			const endDate = new Date(trip.endDate);
			return startDate <= now && endDate >= now;
		}).length,
		upcoming: trips.filter((trip) => {
			const startDate = new Date(trip.startDate);
			return startDate > now;
		}).length,
	};
};

// Get badge count based on option
export const getBadgeCount = (option, trips) => {
	const counts = getCounts(trips);
	switch (option) {
		case "All":
			return counts.all;
		case "Active":
			return counts.active;
		case "Upcoming":
			return counts.upcoming;
		default:
			return 0;
	}
};
