import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import CText from "./CText";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title, icon }) => {
	return (
		<View style={styles.headerContainer}>
			<Ionicons name="arrow-back" size={24} color="black" />
			<CText style={{ textAlign: "center" }}>{title}</CText>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		// backgroundColor: Colors.gray,
		borderBottomColor: Colors.gray,
		borderBottomWidth: 0.5,
		paddingVertical: 16,
		flexDirection: "row",
		gap: 14,
		alignItems: "center",

		// width: "600",
		// flex: 1,
	},
});
