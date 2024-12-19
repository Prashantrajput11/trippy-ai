import React, { useState } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
	Image,
	Dimensions,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { trips } from "@/constants/Trips";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import CText from "../components/CText";
import Tab from "../components/Tab";
import { ITrip } from "@/types";

const { width } = Dimensions.get("window");

const TripCard = ({ item }) => {
	return (
		<TouchableOpacity style={styles.tripItemContainer} activeOpacity={0.7}>
			<Image
				source={require("../../assets/images/korea.jpg")}
				style={styles.tripImage}
				resizeMode="cover"
			/>
			<View style={styles.overlay} />

			<View style={styles.tripContent}>
				<View style={styles.headerContainer}>
					<CText style={styles.tripName} numberOfLines={1}>
						{item.name}
					</CText>
					<CText style={styles.location} numberOfLines={1}>
						{item.country || "Korea"}
					</CText>
				</View>

				<View style={styles.tripCardFooter}>
					<View style={styles.footerItem}>
						<Ionicons name="calendar-outline" size={16} color={Colors.gray} />
						<CText style={styles.footerText}>{item.date}</CText>
					</View>

					<View style={styles.footerItem}>
						<Ionicons name="people-outline" size={16} color={Colors.gray} />
						<CText variant="secondaryText" style={styles.footerText}>
							Couple
						</CText>
					</View>

					<View style={styles.footerItem}>
						<Ionicons name="diamond-outline" size={16} color={Colors.gray} />
						<CText variant="secondaryText" style={styles.footerText}>
							Luxury
						</CText>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const Empty = ({ onPress }) => {
	return (
		<View style={styles.emptyState}>
			{/* <Ionicons
				name="airplane"
				size={64}
				color={Colors.primary}
				style={styles.emptyIcon}
			/> */}
			<CText style={styles.emptyText} variant="heading">
				{"✈️"}
			</CText>
			<CText style={styles.emptyText}>You haven't planned any trips yet</CText>
			<CText variant="secondaryText" style={styles.emptySubtext}>
				Start planning your next adventure today!
			</CText>
			<TouchableOpacity style={styles.startPlanningButton} onPress={onPress}>
				<CText style={styles.buttonText}>Start Planning</CText>
			</TouchableOpacity>
		</View>
	);
};

const MyTrips = () => {
	const navigation = useNavigation();
	const [tripList, setTripList] = useState<ITrip[]>(trips);

	const handleCreateTrip = () => {
		navigation.navigate("TravelPreference");
	};

	const onSelectTripType = (selectedType) => {
		if (selectedType === "All") {
			setTripList(trips); // Show all trips
		} else {
			const filteredTrips = trips.filter((trip) => trip.type === selectedType);
			setTripList(filteredTrips); // Show filtered trips
		}
	};

	return (
		<View style={styles.container}>
			<Tab onSelect={onSelectTripType} />
			{trips.length === 0 ? (
				<Empty onPress={handleCreateTrip} />
			) : (
				<FlatList
					data={tripList}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <TripCard item={item} />}
					contentContainerStyle={styles.listContainer}
					showsVerticalScrollIndicator={false}
				/>
			)}

			<TouchableOpacity
				style={styles.floatingButton}
				onPress={handleCreateTrip}
				activeOpacity={0.8}
			>
				<Ionicons name="add" size={32} color="#fff" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5",
	},
	listContainer: {
		padding: 16,
	},
	tripItemContainer: {
		backgroundColor: "#fff",
		marginBottom: 16,
		borderRadius: 12,
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.1,
				shadowRadius: 8,
			},
			android: {
				elevation: 4,
			},
		}),
	},
	tripImage: {
		height: 200,
		width: "100%",
		borderRadius: 12,
	},
	// overlay: {
	// 	...StyleSheet.absoluteFillObject,
	// 	backgroundColor: "rgba(0,0,0,0.2)",
	// 	borderRadius: 12,
	// },
	tripContent: {
		padding: 16,
	},
	headerContainer: {
		marginBottom: 12,
	},
	tripName: {
		fontSize: 18,
		fontWeight: "600",
		color: "#000",
		marginBottom: 4,
	},
	location: {
		fontSize: 14,
		color: Colors.gray,
	},
	tripCardFooter: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	footerItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	footerText: {
		fontSize: 13,
		color: Colors.gray,
	},
	floatingButton: {
		position: "absolute",
		bottom: 24,
		right: 24,
		backgroundColor: Colors.primary,
		borderRadius: 28,
		width: 56,
		height: 56,
		justifyContent: "center",
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.25,
				shadowRadius: 8,
			},
			android: {
				elevation: 8,
			},
		}),
	},
	emptyState: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
	},
	emptyIcon: {
		marginBottom: 16,
	},
	emptyText: {
		fontSize: 20,
		fontWeight: "600",
		textAlign: "center",
		marginBottom: 8,
	},
	emptySubtext: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 24,
		color: Colors.secondary,
	},
	startPlanningButton: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});

export default MyTrips;
