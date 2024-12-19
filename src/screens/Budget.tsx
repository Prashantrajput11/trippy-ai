import {
	Pressable,
	SafeAreaView,
	StyleSheet,
	View,
	Platform,
} from "react-native";
import React, { useState } from "react";
import { MotiView } from "moti";
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

	const renderCategory = (category) => {
		const isSelected = selectedBudget === category.name;

		return (
			<MotiView
				key={category.id}
				animate={{
					scale: isSelected ? 1.02 : 1,
				}}
				transition={{
					type: "timing",
					duration: 150,
				}}
			>
				<Pressable
					style={[styles.category, isSelected && styles.selectedCategory]}
					onPress={() => onSelectBudget(category)}
				>
					<View style={styles.categoryContent}>
						<View style={styles.emojiContainer}>
							<CText style={styles.emoji}>{category.emoji}</CText>
						</View>
						<View style={styles.textContainer}>
							<CText
								style={[styles.categoryName, isSelected && styles.selectedText]}
							>
								{category.name}
							</CText>
							<CText
								style={[styles.description, isSelected && styles.selectedText]}
							>
								{category.description}
							</CText>
						</View>
					</View>

					{isSelected && (
						<View style={styles.priceRangeContainer}>
							<CText style={[styles.priceRange, styles.selectedText]}>
								{category.priceRange || "$100 - $200 per day"}
							</CText>
						</View>
					)}
				</Pressable>
			</MotiView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<CText style={styles.heading} variant="heading">
					Set Your Trip Budget 💰
				</CText>
				<CText style={styles.subheading}>
					Let us know your budget preference, and we'll craft an itinerary that
					fits your style!
				</CText>
			</View>

			<View style={styles.categoriesContainer}>
				{budgetCategories.map(renderCategory)}
			</View>

			<View style={styles.footer}>
				<CButton
					title="Next"
					containerStyles={styles.button}
					textStyles={styles.buttonText}
					onPress={() => navigation.navigate("Group")}
					disabled={!selectedBudget}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	header: {
		paddingHorizontal: 24,
		paddingTop: 16,
		paddingBottom: 32,
	},
	heading: {
		fontSize: 28,
		fontFamily: "outfit-bold",
		color: Colors.text,
		marginBottom: 12,
		textAlign: "left",
	},
	subheading: {
		fontSize: 16,
		lineHeight: 24,
		color: Colors.gray,
		fontFamily: "outfit-regular",
	},
	categoriesContainer: {
		paddingHorizontal: 16,
		flex: 1,
	},
	category: {
		borderRadius: 16,
		padding: 20,
		marginBottom: 16,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.08)",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.05,
				shadowRadius: 8,
			},
			android: {
				elevation: 2,
			},
		}),
	},
	selectedCategory: {
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
		...Platform.select({
			ios: {
				shadowColor: Colors.primary,
				shadowOpacity: 0.2,
			},
		}),
	},
	categoryContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	emojiContainer: {
		width: 52,
		height: 52,
		backgroundColor: "rgba(0,0,0,0.03)",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	emoji: {
		fontSize: 28,
	},
	textContainer: {
		flex: 1,
	},
	categoryName: {
		fontSize: 18,
		fontFamily: "outfit-semibold",
		color: Colors.text,
		marginBottom: 4,
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
		color: Colors.gray,
		fontFamily: "outfit-regular",
	},
	selectedText: {
		color: Colors.text,
	},
	priceRangeContainer: {
		marginTop: 16,
		paddingTop: 16,
		borderTopWidth: 1,
		borderTopColor: "rgba(255,255,255,0.2)",
	},
	priceRange: {
		fontSize: 14,
		fontFamily: "outfit-medium",
		textAlign: "right",
	},
	footer: {
		padding: 16,
		paddingBottom: Platform.OS === "ios" ? 32 : 16,
		backgroundColor: Colors.background,
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: -4 },
				shadowOpacity: 0.08,
				shadowRadius: 8,
			},
			android: {
				elevation: 8,
			},
		}),
	},
	button: {
		borderRadius: 12,
		paddingVertical: 16,
	},
	buttonText: {
		fontFamily: "outfit-semibold",
		fontSize: 16,
	},
});

export default Budget;
