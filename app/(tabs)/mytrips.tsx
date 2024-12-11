import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { trips } from "@/constants/Trips";
import TripsListItem from "@/components/TripsListItem";
import Tab from "@/components/Tab";

const MyTripsList = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Tab />
			<FlatList
				data={trips}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <TripsListItem tripData={item} />}
				contentContainerStyle={styles.listContainer}
			/>
		</SafeAreaView>
	);
};

export default MyTripsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listContainer: {
		padding: 16, // Add padding to the list container
	},
});
