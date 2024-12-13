import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ITrip } from "@/types";

const TripsListItem = ({ tripData }: { tripData: ITrip }) => {
	const { name, destination, date } = tripData;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.subtitle}>{destination}</Text>
			<Text style={styles.date}>{date}</Text>
		</View>
	);
};

export default TripsListItem;

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
		padding: 16,
		borderRadius: 8,
		backgroundColor: "#f9f9f9",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 3,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
	},
	subtitle: {
		fontSize: 14,
		color: "#666",
		marginVertical: 4,
	},
	date: {
		fontSize: 12,
		color: "#999",
	},
});
