import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import theme from "../../styles/theme";

export default function ActivityCard({ data }) {
  const [isSwiped, setIsSwiped] = useState(false);

  const time = new Date(data.time).toLocaleTimeString("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const handleDelete = () => {
    console.log("Activity deleted");
    setIsSwiped(false);
  };

  const renderRightActions = () => (
    <TouchableOpacity
      onPress={() => handleDelete()}
      style={styles.deleteButton}
    >
      <Text style={styles.deleteText}>Eliminar</Text>
    </TouchableOpacity>
  );

  const handleSwipeOpen = () => {
    setIsSwiped(true);
  };

  const handleSwipeClose = () => {
    setIsSwiped(false);
  };

  return (
    <ReanimatedSwipeable
      renderRightActions={renderRightActions}
      overshootRight={true} // efecto de rebote hacia la derecha
      onSwipeableOpen={handleSwipeOpen} // Detecta cuando se desliza
      onSwipeableClose={handleSwipeClose} // Detecta cuando se cierra
    >
      <View style={[styles.activityCard, isSwiped && styles.noRightRadius]}>
        <View>
          <Text style={styles.activityName}>{data.name}</Text>
          <Text style={styles.activityTime}>{time}</Text>
        </View>
        <Text style={styles.activityAmount}>{data.amount}</Text>
      </View>
    </ReanimatedSwipeable>
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
  noRightRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
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
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.accent,
    width: 80,
    borderRadius: theme.borderRadius.small,
    marginBottom: theme.spacing.small,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  deleteText: {
    color: theme.colors.buttonText,
    fontSize: theme.typography.body.fontSize,
    fontWeight: "bold",
  },
});
