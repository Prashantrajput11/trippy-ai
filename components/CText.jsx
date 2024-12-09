import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const CText = ({
	children,
	style,
	variant = "default",
	fontFamily = "outfit-regular",
	...props
}) => {
	return (
		<Text style={[{ fontFamily }, styles[variant], style]} {...props}>
			{children}
		</Text>
	);
};

export default CText;

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
		color: Colors.text,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.text,
	},
	subheading: {
		fontSize: 18,
		color: Colors.text,
	},
	error: {
		fontSize: 14,
		color: Colors.error,
	},
});
