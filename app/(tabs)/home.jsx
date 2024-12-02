import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import theme from "../../styles/theme";
import WaterConsumptionDailyChart from "../../components/WaterConsumptionDailyChart";
import RecentActivities from "../../components/RecentActivities";
import {
  getCurrentTotalConsumption,
  getRemainingConsumption,
} from "../../services/calculations";
import ChartSlider from "../../components/ChartSlider";

export default function Home() {
  const { colors, typography, spacing } = theme;
  const [currentTotalConsumption, setCurrentTotalConsumption] = useState(0);
  const [remainingConsumption, setRemainingConsumption] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const currentTotalConsumptionData = await getCurrentTotalConsumption();
      const remainingConsumptionData = await getRemainingConsumption();
      if (currentTotalConsumptionData) {
        setCurrentTotalConsumption(currentTotalConsumptionData);
      }
      if (remainingConsumptionData) {
        setRemainingConsumption(remainingConsumptionData);
      }
    };
    getData();
  }, []);

  const data = [
    {
      type: "header",
      title: "¡Hola, Juan!",
      subtitle: "Monitoreando tu consumo de agua",
    },
    { type: "chartSlider", component: <ChartSlider /> },
    { type: "recentActivities", component: <RecentActivities /> },
    {
      type: "stats",
      title: `Consumo Total de Hoy: ${currentTotalConsumption}`,
      subtitle: `Restantes para tu límite: ${remainingConsumption}`,
    },
    {
      type: "actions",
      actions: [
        { title: "Ver Registro Diario" },
        { title: "Registrar Actividad" },
        { title: "Cambiar Meta" },
      ],
    },
  ];

  return (
    <FlatList
      style={styles.mainContainer}
      data={data}
      renderItem={({ item }) => {
        switch (item.type) {
          case "header":
            return (
              <View style={styles.header}>
                <Text style={[styles.title, { color: colors.primary }]}>
                  {item.title}
                </Text>
                <Text style={[styles.subtitle, { color: colors.secondary }]}>
                  {item.subtitle}
                </Text>
              </View>
            );
          case "chartSlider":
            return (
              <View style={styles.containerSliderChart}>{item.component}</View>
            );
          case "recentActivities":
            return <View style={styles.containerCard}>{item.component}</View>;
          case "stats":
            return (
              <View style={[styles.statsCard, styles.containerCard]}>
                <Text style={[styles.statTitle, { color: colors.primary }]}>
                  {item.title}
                </Text>
                <Text
                  style={[styles.statText, { color: colors.textSecondary }]}
                >
                  {item.subtitle}
                </Text>
              </View>
            );
          case "actions":
            return (
              <View style={styles.actions}>
                {item.actions.map((action, index) => (
                  <Button
                    key={index}
                    title={action.title}
                    color={colors.buttonBackground}
                    onPress={() => {}}
                  />
                ))}
              </View>
            );
          default:
            return null;
        }
      }}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ backgroundColor: colors.background }}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: "center",
    marginBottom: theme.spacing.large,
  },
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
  },
  subtitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    marginTop: theme.spacing.small,
  },
  containerCard: {
    marginVertical: theme.spacing.small,
    marginHorizontal: theme.spacing.medium,
  },
  containerSliderChart: {
    marginVertical: theme.spacing.small,
  },
  statsCard: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    marginBottom: theme.spacing.small,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
  },
  graphContainer: {
    marginTop: theme.spacing.small,
  },
  graphText: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
  },
  graph: {
    justifyContent: "center",
    alignItems: "center",
  },
  statTitle: {
    fontSize: theme.typography.subheading.fontSize,
  },
  statText: {
    fontSize: theme.typography.body.fontSize,
    marginVertical: theme.spacing.small,
  },
  actions: {
    marginVertical: theme.spacing.medium,
  },
});
