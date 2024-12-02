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
              <Text style={styles.activityName}>{item.name}</Text>
              <Text style={styles.activityText}>
                {new Date(item.time).toLocaleTimeString()}: {item.amount}L
              </Text>
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
    marginBottom: theme.spacing.medium,
  },
  activityName: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.textPrimary,
  },
  activityText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  noActivitiesText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    textAlign: "center",
  },
});

export default RecentActivities;
