import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const CButton = ({
	title,
	onPress,
	textStyles,
	containerStyles,
	isLoading,
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, containerStyles, isLoading && styles.disabled]}
		>
			<Text style={[styles.text, textStyles]}>{title}</Text>
		</Pressable>
	);
};

export default CButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		borderRadius: 8,
		minHeight: 60,
		paddingHorizontal: 16, // Internal padding for content
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "stretch", // Allows the button to respect parent width/margin
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "600",
	},
	disabled: {
		opacity: 0.5,
	},
});
