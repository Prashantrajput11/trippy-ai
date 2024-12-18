import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	BottomTabBar,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Discover from "./src/screens/Discover";
import Profile from "./src/screens/Profile";
import { Colors } from "./constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { travelPurpose } from "./constants/Trips";

import TravelPreference from "./src/screens/TravelPreference";
import Budget from "./src/screens/Budget";
import Group from "./src/screens/Group";
import GenerateTrip from "./src/screens/GenerateTrip";
import AppNavigation from "./navigation/navigation";
import FormProvider from "./providers/FormProvider";

const App = () => {
	return (
		<>
			<FormProvider>
				<AppNavigation />
			</FormProvider>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
	},
});

export default App;
