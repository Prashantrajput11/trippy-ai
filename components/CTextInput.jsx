import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const CTextInput = ({
	placeholder,
	onChangeText,
	value,
	extraStyles,
	inputStyles,
	...props
}) => {
	return (
		<View style={[styles.container, extraStyles]}>
			<TextInput
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				style={[styles.input, inputStyles]}
				placeholderTextColor={Colors.placeholder}
				{...props}
			/>
		</View>
	);
};

export default CTextInput;

const styles = StyleSheet.create({
	container: {
		borderColor: Colors.info,
		borderWidth: 1,
		borderRadius: 8,
		padding: 6,
		marginBottom: 10,
	},
	input: {
		fontSize: 16,
		color: Colors.text,
	},
});
