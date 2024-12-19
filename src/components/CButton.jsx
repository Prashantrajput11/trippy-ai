import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

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
		borderRadius: 10,
		height: 50,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "stretch",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
	},
	disabled: {
		opacity: 0.5,
	},
});
