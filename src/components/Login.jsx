import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CButton from "../components/CButton";
import { router } from "expo-router";

const Login = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/login.png")}
				style={styles.image}
				resizeMode="cover"
			/>

			<View style={styles.bottomContainer}>
				<Text style={styles.title}>WanderWise AI</Text>

				<Text style={styles.tag}>
					Your Ultimate Travel Guru! Effortlessly plan trips tailored to your
					preferences, uncover hidden gems, and make every journey
					unforgettable. Whether it’s a weekend getaway or a dream vacation,
					Trippy AI ensures seamless planning, smart itineraries, and
					personalized recommendations, all at your fingertips.
				</Text>

				<View style={styles.buttonContainer}>
					<CButton
						title="Explore"
						textStyles={{ fontFamily: "outfit-regular" }}
						containerStyles={{
							marginHorizontal: 20,
							marginVertical: 16,
						}}
						onPress={() => router.push("/sign-in")}
					/>
				</View>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		height: 400,
		width: "100%",
	},
	bottomContainer: {
		flex: 1,
		width: "100%",
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		marginTop: -20,
		backgroundColor: "white",
		paddingHorizontal: 16,
		paddingTop: 20,
	},
	title: {
		fontFamily: "outfit-medium",
		fontSize: 40,
		marginTop: 14,
		textAlign: "center",
	},
	tag: {
		fontFamily: "outfit-regular",
		marginHorizontal: 16,
		textAlign: "center",
		marginTop: 4,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
});
