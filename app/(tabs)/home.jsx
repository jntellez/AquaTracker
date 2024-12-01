import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import theme from "../../styles/theme"; // Importando el tema

export default function Home() {
  const { colors, typography, spacing } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.primary }]}>
          ¡Hola, Juan!
        </Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>
          Monitoreando tu consumo de agua
        </Text>
      </View>

      {/* Registro de actividad */}
      <View style={styles.activityContainer}>
        <Text style={[styles.activityText, { color: colors.primary }]}>
          Actividad Reciente:
        </Text>
        <Text style={[styles.activityText, { color: colors.textPrimary }]}>
          Lavado de platos: 2L
        </Text>
        <Text style={[styles.activityText, { color: colors.textPrimary }]}>
          Ducha: 10L
        </Text>
      </View>

      {/* Gráfico de consumo */}
      <View style={styles.graphContainer}>
        <Text style={[styles.graphText, { color: colors.primary }]}>
          Consumo Diario
        </Text>
        <View style={styles.graph}>
          <Text style={[styles.graphText, { color: colors.primary }]}>
            Gráfico de consumo de agua
          </Text>
        </View>
      </View>

      {/* Estadísticas de consumo */}
      <View style={styles.statsContainer}>
        <Text style={[styles.statText, { color: colors.primary }]}>
          Consumo Total de Hoy: 12L
        </Text>
        <Text style={[styles.statText, { color: colors.textSecondary }]}>
          Faltan para alcanzar tu meta: 8L
        </Text>
      </View>

      {/* Botones para registrar actividades */}
      <View style={styles.actions}>
        <Button
          title="Registrar Actividad"
          color={colors.buttonBackground}
          onPress={() => {}}
        />
        <Button
          title="Ver Historial"
          color={colors.buttonBackground}
          onPress={() => {}}
        />
        <Button
          title="Configuración"
          color={colors.buttonBackground}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
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
  activityContainer: {
    marginVertical: theme.spacing.medium,
  },
  activityText: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
    marginVertical: theme.spacing.small,
  },
  graphContainer: {
    marginVertical: theme.spacing.large,
  },
  graphText: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
  },
  graph: {
    backgroundColor: "rgba(0,0,0,0.1)", // Placeholder para el gráfico
    height: 200,
    marginVertical: theme.spacing.large,
    justifyContent: "center",
    alignItems: "center",
  },
  statsContainer: {
    marginVertical: theme.spacing.large,
  },
  statText: {
    fontSize: theme.typography.body.fontSize,
    marginVertical: theme.spacing.small,
  },
  actions: {
    marginTop: theme.spacing.medium,
  },
});
