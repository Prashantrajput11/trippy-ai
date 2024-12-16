import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	GestureResponderEvent,
	StyleProp,
	ViewStyle,
	TextStyle,
} from "react-native";

interface ChipProps {
	label: string;
	isSelected?: boolean;
	isDismissable?: boolean;
	onPress?: (event: GestureResponderEvent) => void;
	onClose?: (event: GestureResponderEvent) => void;
	customStyles?: {
		containerStyle?: StyleProp<ViewStyle>;
		textStyle?: StyleProp<TextStyle>;
	};
}

const Chip: React.FC<ChipProps> = ({
	label,
	isSelected = false,
	isDismissable = false,
	onPress,
	onClose,
	customStyles = {},
}) => {
	return (
		<TouchableOpacity
			style={[
				styles.chipContainer,
				isSelected ? styles.selectedChip : styles.defaultChip,
				customStyles.containerStyle,
			]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<Text
				style={[
					styles.chipText,
					isSelected ? styles.selectedText : undefined,
					customStyles.textStyle,
				]}
			>
				{label}
			</Text>
			{isDismissable && (
				<TouchableOpacity onPress={onClose} style={styles.closeButton}>
					<Text style={styles.closeButtonText}>✕</Text>
				</TouchableOpacity>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	chipContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 16,
		borderWidth: 1,
		marginRight: 8,
		marginBottom: 8,
	},
	defaultChip: {
		backgroundColor: "#f1f1f1",
		borderColor: "#ccc",
	},
	selectedChip: {
		backgroundColor: "#007bff",
		borderColor: "#0056b3",
	},
	chipText: {
		fontSize: 14,
		color: "#333",
	},
	selectedText: {
		color: "#fff",
	},
	closeButton: {
		marginLeft: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	closeButtonText: {
		fontSize: 12,
		color: "#999",
	},
});

export default Chip;
