import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import theme from "../styles/theme";

const ConsumptionCard = ({
  currentTotalConsumption,
  remainingConsumption,
  goal,
}) => {
  const progress = currentTotalConsumption / goal;

  return (
    <View style={styles.card}>
      {/* Título */}
      <Text style={styles.title}>Consumo actual</Text>
      <Text style={styles.subtitle}>Restante = Limite - Consumido</Text>

      {/* Contenedor principal que divide la gráfica y los detalles */}
      <View style={styles.contentContainer}>
        {/* Gráfico circular */}
        <View style={styles.chartContainer}>
          <ProgressChart
            data={{
              data: [progress], // Progreso actual como porcentaje
            }}
            width={Dimensions.get("window").width * 0.6} // Mayor ancho
            height={200}
            strokeWidth={10}
            radius={80}
            chartConfig={{
              backgroundGradientFrom: theme.colors.cardBackground,
              backgroundGradientTo: theme.colors.cardBackground,
              color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`, // Color principal del progreso
              labelColor: () => theme.colors.textSecondary,
            }}
            hideLegend={true} // Ocultar leyenda adicional
            style={styles.chart}
          />

          {/* Texto en el centro del gráfico */}
          <View style={styles.centerText}>
            <Text style={styles.remainingValue}>{remainingConsumption}</Text>
            <Text style={styles.remainingLabel}>Restante</Text>
          </View>
        </View>

        {/* Detalles de consumo */}
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
            <Text style={styles.detailValue}>{remainingConsumption} L</Text>
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
