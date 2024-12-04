import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import theme from "../styles/theme";

const ConsumptionCard = ({
  currentTotalConsumption = 0,
  remainingConsumption = 0,
  goal = 1, // Evita división por cero
}) => {
  const progress =
    goal > 0 && currentTotalConsumption >= 0
      ? currentTotalConsumption / goal
      : 0;

  const remaining = goal - currentTotalConsumption;
  const validRemainingConsumption = remaining >= 0 ? remaining : 0;

  console.log({
    currentTotalConsumption,
    validRemainingConsumption,
    goal,
    progress,
  });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Consumo actual</Text>
      <Text style={styles.subtitle}>Restante = Limite - Consumido</Text>

      <View style={styles.contentContainer}>
        <View style={styles.chartContainer}>
          <ProgressChart
            data={{
              data: [progress >= 0 && progress <= 1 ? progress : 0],
            }}
            width={Dimensions.get("window").width * 0.6}
            height={200}
            strokeWidth={10}
            radius={80}
            chartConfig={{
              backgroundGradientFrom: theme.colors.cardBackground,
              backgroundGradientTo: theme.colors.cardBackground,
              color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
              labelColor: () => theme.colors.textSecondary,
            }}
            hideLegend={true}
            style={styles.chart}
          />

          <View style={styles.centerText}>
            <Text style={styles.remainingValue}>
              {validRemainingConsumption}
            </Text>
            <Text style={styles.remainingLabel}>Restante</Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Limite</Text>
            <Text style={styles.detailValue}>{goal} L</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Consumido</Text>
            <Text style={styles.detailValue}>{currentTotalConsumption} L</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Restante</Text>
            <Text style={styles.detailValue}>
              {validRemainingConsumption} L
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
  },
  title: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.small,
    color: theme.colors.primary,
  },
  subtitle: {
    ...theme.typography.caption,
    marginBottom: theme.spacing.medium,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  chart: {
    alignSelf: "center",
  },
  centerText: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  remainingValue: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
  remainingLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  details: {
    justifyContent: "space-between",
    marginLeft: theme.spacing.small,
  },
  detailItem: {
    alignItems: "flex-start",
    marginBottom: theme.spacing.small,
  },
  detailTitle: {
    ...theme.typography.caption,
  },
  detailValue: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
});

export default ConsumptionCard;
