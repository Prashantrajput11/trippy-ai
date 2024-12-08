import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/providers/AuthProvider";
import Login from "../../components/Login";

const TabsLayout = () => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Login />;
	}
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
			<Tabs.Screen
				name="mytrips"
				options={{
					headerTitle: "My Trips",
					tabBarLabel: "My Trips",

					tabBarIcon: ({ color }) => (
						<Ionicons name="location-sharp" size={24} color="black" />
					),
				}}
			/>
			<Tabs.Screen
				name="discover"
				options={{
					headerTitle: "Discover",
					tabBarLabel: "Discover ",

					tabBarIcon: ({ color }) => (
						<Ionicons name="globe-sharp" size={24} color="black" />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerTitle: "Profile",
					tabBarLabel: "Profile",

					tabBarIcon: ({ color }) => (
						<Ionicons name="people-circle" size={24} color="black" />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({});
