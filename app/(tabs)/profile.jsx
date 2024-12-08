import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CButton from "../../components/CButton";
import { supabase } from "../../utils/supabase";

const Profile = () => {
	return (
		<View>
			<Text>Profile</Text>

			<CButton title={"SIGNOUT"} onPress={() => supabase.auth.signOut()} />
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
