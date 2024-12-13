import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

interface NotificationBellProps {
	unreadCount: number;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ unreadCount }) => {
	return (
		<View style={styles.container}>
			<FontAwesome name="bell" size={24} color={Colors.primary} />
			{unreadCount > 0 && (
				<View style={styles.badge}>
					<Text style={styles.badgeText}>
						{unreadCount > 99 ? "99+" : unreadCount}
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	badge: {
		position: "absolute",
		top: -6,
		right: -6,
		backgroundColor: "red",
		borderRadius: 8,
		paddingHorizontal: 6,
		paddingVertical: 2,
		minWidth: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	badgeText: {
		color: "white",
		fontSize: 12,
		fontWeight: "bold",
	},
});

export default NotificationBell;
