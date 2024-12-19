import {
	FlatList,
	Pressable,
	SafeAreaView,
	StyleSheet,
	View,
	Platform,
} from "react-native";
import React, { useState } from "react";
import { MotiView } from "moti";
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
			<MotiView
				animate={{
					scale: isSelected ? 1.02 : 1,
				}}
				transition={{
					type: "timing",
					duration: 150,
				}}
			>
				<Pressable
					style={[styles.group, isSelected && styles.selectedGroup]}
					onPress={() => onSelectGroup(item.name)}
				>
					<View style={styles.groupContent}>
						<View style={styles.emojiContainer}>
							<CText style={styles.groupEmoji}>{item.emoji}</CText>
						</View>
						<View style={styles.groupTextContainer}>
							<CText
								style={[
									styles.groupName,
									isSelected && styles.selectedGroupText,
								]}
							>
								{item.name}
							</CText>
							<CText
								style={[
									styles.groupDescription,
									isSelected && styles.selectedGroupText,
								]}
							>
								{item.description}
							</CText>
						</View>
					</View>
				</Pressable>
			</MotiView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<CText style={styles.heading} variant="heading">
					Who Are You Traveling With? 👬
				</CText>
				<CText style={styles.subheading} variant="default">
					Choose your travel group to help us plan a better experience for you.
				</CText>
			</View>

			<FlatList
				data={travelGroups}
				renderItem={renderGroupItem}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.listContent}
				showsVerticalScrollIndicator={false}
			/>

			<View style={styles.footer}>
				<CButton
					title="Next"
					containerStyles={styles.button}
					textStyles={styles.buttonText}
					onPress={() => navigation.navigate("GenerateTrip")}
					disabled={!selectedGroup}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	header: {
		paddingHorizontal: 20,
		paddingTop: 16,
		paddingBottom: 24,
		backgroundColor: Colors.background,
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.05,
				shadowRadius: 8,
			},
			android: {
				elevation: 2,
			},
		}),
	},
	heading: {
		fontFamily: "outfit-bold",
		marginBottom: 8,
		color: Colors.text,
		fontSize: 28,
		lineHeight: 34,
	},
	subheading: {
		color: Colors.gray,
		fontSize: 16,
		lineHeight: 22,
		opacity: 0.8,
	},
	listContent: {
		padding: 20,
		paddingBottom: 100,
	},
	group: {
		backgroundColor: Colors.background,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.08)",
		padding: 16,
		marginBottom: 12,
		borderRadius: 16,
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.05,
				shadowRadius: 8,
			},
			android: {
				elevation: 2,
			},
		}),
	},
	selectedGroup: {
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
		...Platform.select({
			ios: {
				shadowColor: Colors.primary,
				shadowOpacity: 0.2,
			},
		}),
	},
	groupContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	emojiContainer: {
		width: 52,
		height: 52,
		backgroundColor: "rgba(0,0,0,0.03)",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	groupEmoji: {
		fontSize: 28,
	},
	groupTextContainer: {
		flex: 1,
	},
	groupName: {
		fontFamily: "outfit-semibold",
		fontSize: 18,
		color: Colors.text,
		marginBottom: 4,
	},
	groupDescription: {
		fontFamily: "outfit-regular",
		fontSize: 14,
		lineHeight: 20,
		color: Colors.gray,
	},
	selectedGroupText: {
		color: Colors.text,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: Colors.background,
		paddingHorizontal: 20,
		paddingVertical: 16,
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: -4 },
				shadowOpacity: 0.08,
				shadowRadius: 8,
			},
			android: {
				elevation: 8,
			},
		}),
	},
	button: {
		borderRadius: 12,
		paddingVertical: 16,
	},
	buttonText: {
		fontFamily: "outfit-semibold",
		fontSize: 16,
	},
});

export default Group;
