import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import CText from "./CText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

interface Header {
	title: string;
	icon: string;
	onPress: () => void;
}
const Header = ({ title, icon, onPress }: Header) => {
	return (
		<SafeAreaView style={styles.headerContainer}>
			<Pressable onPress={() => router.back()}>
				<Ionicons name={icon} size={24} color="black" />
			</Pressable>

			<CText style={{ textAlign: "center" }}>{title}</CText>
		</SafeAreaView>
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
