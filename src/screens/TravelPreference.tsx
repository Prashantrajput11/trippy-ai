import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Chip from "../components/Chip";
import { travelPurpose } from "@/constants/Trips";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";

const TravelPreference = () => {
	const navigation = useNavigation();

	const [selected, setSelected] = useState("");

	const handleSelect = (item) => {
		console.log(item.name);

		setSelected(item);
	};
	return (
		<View style={{ flex: 1, backgroundColor: "#fff" }}>
			<CText style={styles.heading} variant="heading">
				Tailor Your adventure to your taste ⭐️
			</CText>

			<View style={styles.container}>
				{/* <Text>TravelPreference</Text> */}

				{travelPurpose.map((item, index) => {
					return (
						<Chip
							title={item.name}
							emoji={item.emoji}
							key={index}
							onPress={() => handleSelect(item)}
							isSelected={selected.id === item.id}
						/>
					);
				})}
			</View>

			<CButton
				title={"Next"}
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("Budget")}
			/>
		</View>
	);
};

export default TravelPreference;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 16,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	heading: {
		// textAlign: "center",
		fontFamily: "outfit-bold",
		// fontSize: 34,
		marginVertical: 16,
		color: Colors.text,
		marginHorizontal: 16,
	},
});
