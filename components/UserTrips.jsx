import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CButton from "./CButton";
import CText from "./CText";
import Header from "./Header";

const UserTrips = () => {
	return (
		<View>
			<Header title={"My Trips"} />
			<EmptyTrips />
		</View>
	);
};

const EmptyTrips = () => {
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
					fontSize: 34,
					marginVertical: 16,
				}}
				// variant="subheading"
			>
				No Trips Yet !!
			</CText>

			<CButton
				title="Create a trip"
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
			/>
		</View>
	);
};
export default UserTrips;

const styles = StyleSheet.create({});
