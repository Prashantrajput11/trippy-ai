import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Tab = ({ onSelect }) => {
	const options = ["All", "Active", "Upcoming"];
	const [selectedTab, setSelectedTab] = useState(options[0]);

	return (
		<View style={styles.container}>
			{options.map((option) => {
				const isSelected = selectedTab === option;
				return (
					<TouchableOpacity
						key={option}
						onPress={() => {
							setSelectedTab(option); // Update selected tab state
							onSelect(option); // Pass the actual option for filtering
						}}
						style={[styles.tab, isSelected && styles.selectedTab]}
						accessibilityRole="button"
					>
						<Text
							style={[styles.tabText, isSelected && styles.selectedTabText]}
						>
							{option}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default Tab;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#bdc3c7",
		borderRadius: 8,
		marginHorizontal: 16,
		flexDirection: "row",
		overflow: "hidden",
	},
	tab: {
		flex: 1,
		paddingVertical: 12,
		alignItems: "center",
		backgroundColor: "transparent",
	},
	selectedTab: {
		backgroundColor: "#2ecc71",
	},
	tabText: {
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
		fontFamily: "outfit-regular",
	},
	selectedTabText: {
		color: "#fff",
	},
});
