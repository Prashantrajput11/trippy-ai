import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CText from "./CText";
import { Colors } from "@/constants/Colors";
import CButton from "./CButton";
import { router } from "expo-router";

const EmptyTrip = () => {
	return (
		<View>
			<Image
				source={require("../assets/images/notrips.png")}
				style={{ width: "100%", height: 500 }}
				resizeMode="contain"
			/>

			<CText
				style={{
					textAlign: "center",
					fontFamily: "outfit-bold",
					fontSize: 24,
					marginVertical: 16,
					color: Colors.primary_light,
				}}
				// variant="subheading"
			>
				No Trips Yet !!
			</CText>

			<CButton
				title="Create a trip"
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => router.push("/createTrip/search-place")}
			/>
		</View>
	);
};

export default EmptyTrip;

const styles = StyleSheet.create({});
