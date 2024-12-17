import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";

const GenerateTrip = () => {
	const navigation = useNavigation();
	return (
		<View>
			{/* <Text>GenerateTrip</Text> */}

			<CText style={styles.subheading} variant="heading">
				Please review your details
			</CText>

			<CButton
				title={"Generate Trip"}
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("Budget")}
			/>
		</View>
	);
};

export default GenerateTrip;

const styles = StyleSheet.create({
	subheading: {
		// color: Colors.gray,
		marginHorizontal: 16,
		marginVertical: 16,
	},
});
