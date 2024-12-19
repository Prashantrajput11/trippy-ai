import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { getBadgeCount } from "@/utils/common";
import { trips } from "@/constants/Trips";
const Tab = ({ onSelect }) => {
	const options = ["All", "Active", "Upcoming"];
	const [selectedTab, setSelectedTab] = useState(options[0]);

	return (
		<View style={styles.container}>
			{options.map((option) => {
				const isSelected = selectedTab === option;

				const count = getBadgeCount(option, trips);

				console.log("count", count);

				return (
					<TouchableOpacity
						key={option}
						onPress={() => {
							setSelectedTab(option);
							onSelect(option);
						}}
						style={[styles.tab, isSelected && styles.selectedTab]}
						accessibilityRole="button"
					>
						<View style={styles.tabContent}>
							<Text
								style={[styles.tabText, isSelected && styles.selectedTabText]}
							>
								{option}
							</Text>
							{count > 0 && (
								<View style={[styles.badge, isSelected && styles.badge]}>
									<Text
										style={[styles.badgeText, isSelected && styles.badgeText]}
									>
										{count}
									</Text>
								</View>
							)}
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5F5F7",
		borderRadius: 12,
		marginHorizontal: 16,
		flexDirection: "row",
		padding: 4,
		marginVertical: 20,
	},
	tab: {
		flex: 1,
		paddingVertical: 12,
		alignItems: "center",
		borderRadius: 8,
	},
	selectedTab: {
		backgroundColor: Colors.primary,
	},
	tabText: {
		fontSize: 15,
		color: Colors.secondary,
		fontFamily: "outfit-medium",
	},
	selectedTabText: {
		color: "#FFF",
		fontFamily: "outfit-semibold",
	},
	tabContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 6,
	},
	badge: {
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 10,
		minWidth: 20,
	},
	badgeText: {
		color: "#FFF",
		fontSize: 12,
		fontFamily: "outfit-medium",
		textAlign: "center",
	},
});

export default Tab;
