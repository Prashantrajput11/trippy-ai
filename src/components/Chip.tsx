import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CText from "./CText";

interface Chip {
	title: string;
	onPress: () => {};
	emoji: string;
	isSelected: boolean;
}
const Chip = ({ title, onPress, emoji, isSelected }: Chip) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.container,
				{ backgroundColor: isSelected ? "red" : Colors.background },
			]}
		>
			<CText style={styles.text}>{title}</CText>
			<CText>{emoji}</CText>
		</Pressable>
	);
};

export default Chip;

const styles = StyleSheet.create({
	container: {
		// backgroundColor: isSelected ? "red" : Colors.background,
		alignItems: "center",
		borderRadius: 16,
		marginHorizontal: 16,
		flexDirection: "row",
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginVertical: 16,
		gap: 4,

		borderWidth: 0.5,
		borderColor: Colors.gray,
	},

	text: {
		color: Colors.text,
		fontFamily: "outfit-regular",
	},
});
