import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import AuthProvider from "../providers/AuthProvider";

export default function RootLayout() {
	useFonts({
		"outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
		"outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
		"outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
	});
	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" />
			</Stack>
		</AuthProvider>
	);
}
