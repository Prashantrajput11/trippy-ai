import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Chip from "../components/Chip";

const TravelPreference: React.FC = () => {
	const [selectedChips, setSelectedChips] = useState<string[]>([]);

	const preferences = [
		"Leisure",
		"Business",
		"Adventure",
		"Romantic",
		"Family Trip",
		"Wellness/Relaxation",
		"Cultural Exploration",
	];

	const handleSelectChip = (label: string) => {
		setSelectedChips((prev) =>
			prev.includes(label)
				? prev.filter((item) => item !== label)
				: [...prev, label]
		);
	};

	const handleRemoveChip = (label: string) => {
		setSelectedChips((prev) => prev.filter((item) => item !== label));
		Alert.alert(`${label} removed!`);
	};

	return (
		<View style={styles.container}>
			{preferences.map((preference) => (
				<Chip
					key={preference}
					label={preference}
					isSelected={selectedChips.includes(preference)}
					onPress={() => handleSelectChip(preference)}
					isDismissable
					onClose={() => handleRemoveChip(preference)}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#fff",
	},
});

export default TravelPreference;
