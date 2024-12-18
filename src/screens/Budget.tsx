import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CText from "../components/CText";
import CButton from "../components/CButton";
import { Colors } from "@/constants/Colors";
import { budgetCategories } from "@/constants/Trips";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "@/providers/FormProvider";

const Budget = () => {
	const navigation = useNavigation();

	const [selectedBudget, setSelectedBudget] = useState("");

	const { updateFormData } = useFormContext();

	const onSelectBudget = (item) => {
		setSelectedBudget(item.name);
		updateFormData("budget", item.name);
	};

	const getDescription = (name) => {
		switch (name) {
			case "Economy":
				return "Moderate spending for cost-conscious travelers.";
			case "Moderate":
				return "Balanced spending with comfort.";
			case "Luxury":
				return "Experience premium travel and indulgence.";
			default:
				return "";
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<CText style={styles.heading} variant="heading">
				Set your trip budget 💰
			</CText>
			<CText style={styles.subheading}>
				Let us know your budget preference, and we'll craft an itinerary just
				for you!
			</CText>

			{budgetCategories.map((category) => {
				const isSelected = selectedBudget === category.name;
				return (
					<Pressable
						style={[
							styles.category,
							{ backgroundColor: isSelected ? Colors.primary : Colors.white },
						]}
						key={category.id}
						onPress={() => onSelectBudget(category)}
					>
						<View style={styles.categoryContent}>
							<CText style={styles.emoji}>{category.emoji}</CText>
							<View>
								<CText
									style={[
										styles.categoryName,
										{ color: isSelected ? Colors.white : Colors.text },
									]}
								>
									{category.name}
								</CText>
								<CText
									style={[
										styles.description,
										{ color: isSelected ? Colors.white : Colors.gray },
									]}
								>
									{category.description}
								</CText>
							</View>
						</View>
					</Pressable>
				);
			})}

			<CButton
				title={"Next"}
				containerStyles={styles.button}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("Group")}
			/>
		</SafeAreaView>
	);
};

export default Budget;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		paddingVertical: 16,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.text,
		marginBottom: 8,
		textAlign: "center",
	},
	subheading: {
		color: Colors.gray,
		textAlign: "center",
		marginBottom: 24,
		paddingHorizontal: 16,
	},
	category: {
		borderRadius: 8,
		padding: 16,
		marginHorizontal: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: Colors.grayLight,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	categoryContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	emoji: {
		fontSize: 24,
		marginRight: 16,
	},
	categoryName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
	},
	button: {
		marginHorizontal: 16,
		marginTop: 16,
	},
});
