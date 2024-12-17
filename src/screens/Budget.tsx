import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import { budgetCategories } from "@/constants/Trips";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";

const Budget = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			{/* <Header icon="back-arrow" title="Back" /> */}
			<CText style={styles.heading} variant="heading">
				Set your trip budget 💰
			</CText>
			<CText style={styles.subheading} variant="deafult">
				Let us know your budget prefernce and we will craft an itenary that
				suits your prefermce
			</CText>

			{budgetCategories.map((category) => {
				return (
					<View style={styles.category}>
						<CText>{category.name}</CText>
					</View>
				);
			})}

			<CButton
				title={"Next"}
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("Group")}
			/>
		</SafeAreaView>
	);
};

export default Budget;

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
	category: {
		backgroundColor: Colors.background,
		borderWidth: 0.2,
		paddingHorizontal: 16,
		paddingVertical: 12,
		marginVertical: 16,
		marginHorizontal: 16,
		borderRadius: 6,
	},
});
