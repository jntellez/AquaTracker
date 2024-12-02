import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useWaterConsumption } from "../../store/WaterConsumptionStore"; // Acceder a la store
import WaterConsumptionChart from "../../components/WaterConsumptionChart";
import theme from "../../styles/theme"; // Importar el tema
import ChartSlider from "../../components/ChartSlider";

const Stats = () => {
  const { userInfo, dailyConsumption } = useWaterConsumption(); // Acceder a la información del usuario
  const data = [2.5, 3.0, 2.8, 3.2, 2.6]; // Consumo de agua (litros)
  const labels = ["Lun", "Mar", "Mié", "Jue", "Vie"]; // Días de la semana

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View
        style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}
      >
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Estadísticas
        </Text>

        <Text style={[styles.info, { color: theme.colors.textPrimary }]}>
          Nombre: {userInfo.name}
        </Text>
        <Text style={[styles.info, { color: theme.colors.textPrimary }]}>
          Edad: {userInfo.age}
        </Text>
        <Text style={[styles.info, { color: theme.colors.textPrimary }]}>
          Meta diaria de agua: {userInfo.dailyWaterGoal} Litros
        </Text>

        <Text style={[styles.info, { color: theme.colors.textPrimary }]}>
          Consumo diario:
        </Text>
        {dailyConsumption.map((activity, index) => (
          <Text
            key={index}
            style={[styles.info, { color: theme.colors.textPrimary }]}
          >
            {activity.activityName} - {activity.amount} Litros
          </Text>
        ))}
      </View>
      <ChartSlider firstSemanal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
  },
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    marginBottom: theme.spacing.medium,
  },
  info: {
    fontSize: theme.typography.body.fontSize,
    marginBottom: theme.spacing.small,
  },
});

export default Stats;
