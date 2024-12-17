import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import { budgetCategories, travelGroups } from "@/constants/Trips";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";

const Group = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			{/* <Header icon="back-arrow" title="Back" /> */}
			<CText style={styles.heading} variant="heading">
				Who Are You Traveling With? 👬
			</CText>
			<CText style={styles.subheading} variant="deafult">
				Choose your travel group to help us plan a better experience for you
			</CText>

			{travelGroups.map((group) => {
				return (
					<View style={styles.group}>
						<CText>{group.name}</CText>
					</View>
				);
			})}

			<CButton
				title={"Next"}
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("GenerateTrip")}
			/>
		</SafeAreaView>
	);
};

export default Group;

const styles = StyleSheet.create({
	heading: {
		// textAlign: "center",
		fontFamily: "outfit-bold",
		// fontSize: 34,
		marginVertical: 16,
		color: Colors.text,
		marginHorizontal: 16,
	},
	subheading: {
		color: Colors.gray,
		marginHorizontal: 16,
	},
	group: {
		backgroundColor: Colors.background,
		borderWidth: 0.2,
		paddingHorizontal: 16,
		// paddingVertical: 32,
		height: 60,
		// alignItems: "center",
		justifyContent: "center",
		marginVertical: 16,
		marginHorizontal: 16,
		borderRadius: 6,
	},
});
