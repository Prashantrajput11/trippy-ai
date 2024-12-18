import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	BottomTabBar,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Discover from "@/src/screens/Discover";
import TravelPreference from "@/src/screens/TravelPreference";
import Profile from "@/src/screens/Profile";
import Home from "@/src/screens/Home";
import Budget from "@/src/screens/Budget";
import Group from "@/src/screens/Group";
import GenerateTrip from "@/src/screens/GenerateTrip";
import MyTrips from "@/src/screens/MyTrips";

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
				name="My Trips"
				component={MyTrips}
				options={{
					title: "My Trips",
					tabBarActiveTintColor: Colors.primary,

					tabBarIcon: ({ color, size }) => (
						<Ionicons name="earth" size={size} color={Colors.primary} />
					),
				}}
			/>
			{/* <BottomTabs.Screen
				name="Form"
				component={TravelPreference}
				options={{
					title: "Create ",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name="earth" size={size} color={Colors.primary} />
					),
				}}
			/> */}

			<BottomTabs.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "Profile",
					tabBarActiveTintColor: Colors.primary,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="people" size={size} color={Colors.primary} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};
const AppNavigation = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						// headerTintColor: Colors.primary,
						headerShown: false,
					}}
				>
					<Stack.Screen name="MyBottomTabs" component={MyBottomTabs} />

					<Stack.Screen
						name="TravelPreference"
						component={TravelPreference}
						options={{ headerShown: true }}
					/>
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

export default AppNavigation;
