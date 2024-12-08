import React, { useState } from "react";
import {
	Alert,
	StyleSheet,
	View,
	AppState,
	TextInput,
	Text,
} from "react-native";
import CButton from "../../components/CButton";
// import { supabase } from "../../utils/supabase";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
	if (state === "active") {
		supabase.auth.startAutoRefresh();
	} else {
		supabase.auth.stopAutoRefresh();
	}
});

export default function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	async function signInWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});

		if (error) Alert.alert(error.message);
		setLoading(false);
	}

	async function signUpWithEmail() {
		setLoading(true);
		const {
			data: { session },
			error,
		} = await supabase.auth.signUp({
			email: email,
			password: password,
		});

		if (error) Alert.alert(error.message);
		if (!session)
			Alert.alert("Please check your inbox for email verification!");
		setLoading(false);
	}

	return (
		<View style={styles.container}>
			{/* Header */}
			<Text style={styles.header}>Welcome</Text>

			{/* Email Input */}
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setEmail(text)}
					value={email}
					placeholder="email@address.com"
					autoCapitalize="none"
					keyboardType="email-address"
					placeholderTextColor="gray"
				/>
			</View>

			{/* Password Input */}
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setPassword(text)}
					value={password}
					secureTextEntry
					placeholder="Password"
					autoCapitalize="none"
					placeholderTextColor="gray"
				/>
			</View>

			{/* Sign In Button */}
			<View style={styles.buttonContainer}>
				<CButton
					title="Sign in"
					disabled={loading}
					handlePress={() => signInWithEmail()}
					containerStyles={styles.signInButton}
					textStyles={styles.buttonText}
				/>
			</View>

			{/* Sign Up Button */}
			<View style={styles.buttonContainer}>
				<CButton
					title="Create Account"
					disabled={loading}
					handlePress={() => signUpWithEmail()}
					containerStyles={styles.signUpButton}
					textStyles={styles.buttonTextWhite}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f3f4f6", // bg-gray-100
		padding: 24, // p-6
	},
	header: {
		marginBottom: 32, // mb-8
		fontSize: 24, // text-3xl
		fontWeight: "bold",
		color: "#4b5563", // text-gray-700
	},
	inputContainer: {
		marginBottom: 16, // mb-4
		width: "100%", // w-full
	},
	input: {
		width: "100%", // w-full
		padding: 16, // p-4
		backgroundColor: "#fff", // bg-white
		borderRadius: 8, // rounded-lg
		borderWidth: 1,
		borderColor: "#d1d5db", // border-gray-300
		color: "#4b5563", // text-gray-800
	},
	buttonContainer: {
		marginBottom: 16, // mb-4
		width: "100%", // w-full
	},
	signInButton: {
		backgroundColor: "#fff", // bg-white
		paddingVertical: 16, // py-4
		borderRadius: 8, // rounded-md
		borderWidth: 1,
		borderColor: "#f59e0b", // border-amber-700
	},
	signUpButton: {
		backgroundColor: "#f59e0b", // bg-amber-700
		paddingVertical: 16, // py-4
		borderRadius: 8, // rounded-md
	},
	buttonText: {
		fontSize: 18, // text-lg
		fontWeight: "600", // font-semibold
		color: "#4b5563", // text-gray-800
	},
	buttonTextWhite: {
		fontSize: 18, // text-lg
		fontWeight: "600", // font-semibold
		color: "#fff", // text-white
	},
});
