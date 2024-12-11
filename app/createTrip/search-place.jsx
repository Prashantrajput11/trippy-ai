import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CTextInput from "../../components/CTextInput";
import CButton from "../../components/CButton";
import Header from "../../components/Header";
import { router } from "expo-router";

const SearchPlace = () => {
	const [tripName, setTripName] = useState("thailand");
	return (
		<View>
			<Header title="Search Your destination" onPress={() => router.back()} />

			<CTextInput
				placeholder={"enter trip name"}
				extraStyles={{ marginHorizontal: 16 }}
			/>
			<CTextInput
				placeholder={"enter destination"}
				extraStyles={{ marginHorizontal: 16 }}
			/>

			<CButton title="Next" containerStyles={{ marginHorizontal: 16 }} />
		</View>
	);
};

export default SearchPlace;

const styles = StyleSheet.create({});
