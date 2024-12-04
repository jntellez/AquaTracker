import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getLastRecord } from "../services/storage";
import theme from "../styles/theme";

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLastRecord();
      if (data && data.activities.length > 0) {
        setActivities(data.activities);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        Actividades Recientes:
      </Text>
      {activities.length > 0 ? (
        <FlatList
          data={activities}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <View>
                <Text style={styles.activityName}>{item.name}</Text>
                <Text style={styles.activityTime}>
                  {new Date(item.time).toLocaleTimeString("es-MX", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </Text>
              </View>
              <Text style={styles.activityAmount}>{item.amount} L</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noActivitiesText}>
          No hay actividades registradas
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.large,
    width: "100%",
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
    paddingVertical: theme.spacing.medium,
  },
  title: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.medium,
  },
  activityItem: {
    flexDirection: "row", // Alinea los hijos horizontalmente
    justifyContent: "space-between", // Espacia los elementos entre sí
    marginBottom: theme.spacing.medium,
  },
  activityName: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.textPrimary,
  },
  activityTime: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  activityAmount: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
    color: theme.colors.textPrimary,
  },
  noActivitiesText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    textAlign: "center",
  },
});

export default RecentActivities;
