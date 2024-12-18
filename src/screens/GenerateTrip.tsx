import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import { useFormContext } from "@/providers/FormProvider";

const GenerateTrip = () => {
	const navigation = useNavigation();

	const { formData } = useFormContext();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<CText style={styles.title} variant="heading">
				Review Your Trip Details
			</CText>

			<View style={styles.card}>
				<CText style={styles.label}>Travel Preference:</CText>
				<CText style={styles.value}>{formData.travelPreference || "N/A"}</CText>

				<CText style={styles.label}>Budget:</CText>
				<CText style={styles.value}>{formData.budget || "N/A"}</CText>

				<CText style={styles.label}>Number of People:</CText>
				<CText style={styles.value}>{formData.group || "N/A"}</CText>
			</View>

			<CButton
				title={"Generate Trip"}
				containerStyles={styles.button}
				onPress={() => navigation.navigate("Budget")}
			/>
		</ScrollView>
	);
};

export default GenerateTrip;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: Colors.background,
		flexGrow: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.text,
		marginBottom: 16,
		textAlign: "center",
	},
	card: {
		backgroundColor: Colors.cardBackground,
		borderRadius: 8,
		padding: 16,
		marginBottom: 24,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		color: Colors.text,
		marginBottom: 4,
	},
	value: {
		fontSize: 16,
		color: Colors.text,
		marginBottom: 16,
	},
	button: {
		marginHorizontal: 16,
		backgroundColor: Colors.primary,
	},
});
