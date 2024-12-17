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

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

const MyBottomTabs = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerTintColor: Colors.primary,
				tabBarActiveTintColor: "red",
			}}
		>
			<BottomTabs.Screen
				name="Discover"
				component={Discover}
				options={{
					title: "Discover",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name="earth" size={size} color={Colors.primary} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="Form"
				component={TravelPreference}
				options={{
					title: "Form",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name="earth" size={size} color={Colors.primary} />
					),
				}}
			/>

			<BottomTabs.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="people" size={size} color={Colors.primary} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};
const App = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerTintColor: "red", headerShown: false }}
				>
					<Stack.Screen name="MyBottomTabs" component={MyBottomTabs} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen
						name="Budget"
						component={Budget}
						options={{ headerShown: true }}
					/>
					<Stack.Screen
						name="Group"
						component={Group}
						options={{ headerShown: true }}
					/>
					<Stack.Screen
						name="GenerateTrip"
						component={GenerateTrip}
						options={{ headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
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
