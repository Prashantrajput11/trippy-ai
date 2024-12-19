import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Chip from "../components/Chip";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import CButton from "../components/CButton";
import { travelPurpose } from "@/constants/Trips";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "@/providers/FormProvider";

const TravelPreference = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState("");

	const { updateFormData } = useFormContext();

	const handleSelect = (item) => {
		updateFormData("travelPreference", item.name);
		setSelected(item);
	};

	return (
		<View style={styles.container}>
			<CText style={styles.heading} variant="heading">
				Tailor Your Adventure to Your Taste ⭐️
			</CText>
			<CText style={styles.subheading} variant="default">
				Select your travel purpose to create a personalized experience.
			</CText>

			{/* <View style={styles.chipContainer}>
				{travelPurpose.map((item, index) => (
					<Chip
						title={item.name}
						emoji={item.emoji}
						key={index}
						onPress={() => handleSelect(item)}
						isSelected={selected.id === item.id}
					/>
				))}
			</View> */}

			<FlatList
				data={travelPurpose}
				renderItem={({ item }) => (
					<View>
						<Chip
							title={item.name}
							emoji={item.emoji}
							onPress={() => handleSelect(item)}
							isSelected={selected.id === item.id}
							// style={styles.chip}
						/>
					</View>
				)}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				// contentContainerStyle={styles.flatListContainer}
			/>

			<CButton
				title="Next"
				containerStyles={styles.buttonContainer}
				textStyles={styles.buttonText}
				onPress={() => navigation.navigate("Budget")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: 6,
	},
	heading: {
		fontFamily: "outfit-bold",
		fontSize: 24,
		marginBottom: 8,
		color: Colors.text,
		textAlign: "center",
	},
	subheading: {
		fontFamily: "outfit-regular",
		fontSize: 16,
		color: Colors.gray,
		textAlign: "center",
		marginBottom: 16,
	},
	flatListContainer: {
		paddingHorizontal: 16,
	},
	chip: {
		flexBasis: "45%",
		marginHorizontal: 8,
		marginVertical: 8,
	},
	buttonContainer: {
		marginHorizontal: 16,
		backgroundColor: Colors.primary,
		borderRadius: 8,
		paddingVertical: 12,
		marginVertical: 16,
	},
	buttonText: {
		fontFamily: "outfit-bold",
		fontSize: 16,
		color: "#fff",
		textAlign: "center",
	},
});

export default TravelPreference;
