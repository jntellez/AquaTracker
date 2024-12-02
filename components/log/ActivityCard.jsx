import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/theme";

export default function ActivityCard({ data }) {
  return (
    <View style={styles.activityCard}>
      <View>
        <Text style={styles.activityName}>{data.name}</Text>
        <Text style={styles.activityTime}>{data.time}</Text>
      </View>
      <Text style={styles.activityAmount}>{data.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.cardBackground,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    marginBottom: theme.spacing.small,
  },
  activityName: {
    ...theme.typography.body,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.small / 3,
  },
  activityTime: {
    ...theme.typography.caption,
  },
  activityAmount: {
    ...theme.typography.body,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
});
