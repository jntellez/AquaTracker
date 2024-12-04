import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useWaterConsumption } from "../../store/WaterConsumptionStore"; // Acceder a la store
import theme from "../../styles/theme"; // Importar el tema
import ChartSlider from "../../components/ChartSlider";
import RecentActivities from "../../components/RecentActivities";

const Stats = () => {
  const { userInfo, dailyConsumption } = useWaterConsumption(); // Acceder a la información del usuario

  // Datos para FlatList
  const items = [
    {
      id: "1",
      type: "userInfo",
      component: (
        <View style={styles.cardUserInfo}>
          <Text style={styles.cardTitle}>Tu información</Text>
          <View style={styles.infoRow}>
            <Text
              style={[styles.infoLabel, { color: theme.colors.textSecondary }]}
            >
              Nombre:{" "}
            </Text>
            <Text
              style={[styles.infoValue, { color: theme.colors.textPrimary }]}
            >
              {userInfo.name}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text
              style={[styles.infoLabel, { color: theme.colors.textSecondary }]}
            >
              Edad:{" "}
            </Text>
            <Text
              style={[styles.infoValue, { color: theme.colors.textPrimary }]}
            >
              {userInfo.age}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text
              style={[styles.infoLabel, { color: theme.colors.textSecondary }]}
            >
              Límite diario:{" "}
            </Text>
            <Text
              style={[styles.infoValue, { color: theme.colors.textPrimary }]}
            >
              {userInfo.dailyWaterGoal} Litros
            </Text>
          </View>
        </View>
      ),
    },
    {
      id: "2",
      type: "chartSlider",
      component: <ChartSlider firstSemanal />,
    },
    {
      id: "3",
      type: "recentActivities",
      component: (
        <View style={styles.cardRecents}>
          <RecentActivities />
        </View>
      ),
    },
  ];

  return (
    <FlatList
      style={styles.container}
      data={items}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          Estadísticas
        </Text>
      }
      renderItem={({ item }) => <View>{item.component}</View>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  cardUserInfo: {
    backgroundColor: theme.colors.cardBackground,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  cardRecents: {
    margin: theme.spacing.medium,
  },
  cardTitle: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.small,
  },
  title: {
    ...theme.typography.heading,
    marginVertical: theme.spacing.medium,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: theme.spacing.small,
    alignItems: "center",
  },
  infoLabel: {
    ...theme.typography.body,
  },
  infoValue: {
    ...theme.typography.body,
  },
});

export default Stats;
