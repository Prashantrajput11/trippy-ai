import { Text, View } from "react-native";

import Login from "../components/Login";
import { Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

export default function Index() {
	const user = true;

	const { isAuthenticated } = useAuth();
	return (
		<View style={{ flex: 1 }}>
			{isAuthenticated ? <Redirect href="/mytrips" /> : <Login />}
		</View>
	);
}
