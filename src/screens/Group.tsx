import {
	FlatList,
	Pressable,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import React, { useState } from "react";
import CText from "../components/CText";
import { Colors } from "@/constants/Colors";
import { travelGroups } from "@/constants/Trips";
import CButton from "../components/CButton";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "@/providers/FormProvider";

const Group = () => {
	const navigation = useNavigation();
	const [selectedGroup, setSelectedGroup] = useState("");

	const { updateFormData } = useFormContext();

	const onSelectGroup = (name) => {
		setSelectedGroup(name);
		updateFormData("group", name);
	};

	const renderGroupItem = ({ item }) => {
		const isSelected = selectedGroup === item.name;
		return (
			<Pressable
				style={[styles.group, isSelected && styles.selectedGroup]}
				onPress={() => onSelectGroup(item.name)}
			>
				<View style={styles.groupContent}>
					<CText style={styles.groupEmoji}>{item.emoji}</CText>
					<View style={styles.groupTextContainer}>
						<CText style={styles.groupName}>{item.name}</CText>
						<CText
							style={[
								styles.groupDescription,
								{ color: isSelected ? Colors.white : Colors.text },
							]}
						>
							{item.description}
						</CText>
					</View>
				</View>
			</Pressable>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<CText style={styles.heading} variant="heading">
				Who Are You Traveling With? 👬
			</CText>
			<CText style={styles.subheading} variant="default">
				Choose your travel group to help us plan a better experience for you.
			</CText>

			<FlatList
				data={travelGroups}
				renderItem={renderGroupItem}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.listContent}
			/>

			<CButton
				title={"Next"}
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => navigation.navigate("GenerateTrip")}
			/>
		</SafeAreaView>
	);
};

export default Group;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	heading: {
		fontFamily: "outfit-bold",
		marginVertical: 16,
		color: Colors.text,
		marginHorizontal: 16,
		fontSize: 24,
	},
	subheading: {
		color: Colors.gray,
		marginHorizontal: 16,
		fontSize: 16,
		marginBottom: 16,
	},
	listContent: {
		paddingBottom: 16,
	},
	group: {
		backgroundColor: Colors.background,
		borderWidth: 0.2,
		padding: 16,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		elevation: 2, // For shadow effect on Android
		shadowColor: "#000", // For shadow effect on iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	selectedGroup: {
		backgroundColor: Colors.primary,
	},
	groupContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	groupEmoji: {
		fontSize: 32,
		marginRight: 12,
	},
	groupTextContainer: {
		flex: 1,
	},
	groupName: {
		fontFamily: "outfit-bold",
		fontSize: 18,
		color: Colors.text,
		marginBottom: 4,
	},
	groupDescription: {
		fontFamily: "outfit-regular",
		fontSize: 14,
		color: Colors.gray,
	},
});
