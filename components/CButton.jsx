import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

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
			<Text style={[{ fontSize: 16 }, textStyles]}>{title}</Text>
		</Pressable>
	);
};

export default CButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#4CAF50", // Default green color
		borderRadius: 8,
		minHeight: 60,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#FFFFFF", // Default white text color
		fontSize: 16,
		fontWeight: "600",
	},
	disabled: {
		opacity: 0.5, // Reduce opacity when disabled
	},
});
