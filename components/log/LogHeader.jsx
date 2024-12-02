import { useEffect, useState } from "react";
import {
  getCurrentTotalConsumption,
  getDailyWaterGoal,
  getRemainingConsumption,
} from "../../services/calculations";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/theme"; // Asegúrate de importar el tema

export default function LogHeader() {
  const [currentTotalConsumption, setCurrentTotalConsumption] = useState(0);
  const [remainingConsumption, setRemainingConsumption] = useState(0);
  const [dailyWaterGoal, setDailyWaterGoal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const currentTotalConsumptionData = await getCurrentTotalConsumption();
      const remainingConsumptionData = await getRemainingConsumption();
      const dailyWaterGoalData = await getDailyWaterGoal();
      if (currentTotalConsumptionData) {
        setCurrentTotalConsumption(currentTotalConsumptionData);
      }
      if (remainingConsumptionData) {
        setRemainingConsumption(remainingConsumptionData);
      }
      if (dailyWaterGoalData) {
        setDailyWaterGoal(dailyWaterGoalData);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Consumo Restante</Text>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.text}>{dailyWaterGoal} L</Text>
          <Text style={styles.caption}>Limite</Text>
        </View>
        <View>
          <Text style={styles.separator}>-</Text>
          <Text></Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{currentTotalConsumption} L</Text>
          <Text style={styles.caption}>Consumido</Text>
        </View>
        <View>
          <Text style={styles.separator}>=</Text>
          <Text></Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textRemaining}>{remainingConsumption} L</Text>
          <Text style={styles.caption}>Restante</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
  },
  title: {
    ...theme.typography.body,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.medium,
    alignItems: "center",
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.textPrimary,
  },
  section: {
    alignItems: "center",
    marginHorizontal: theme.spacing.small,
  },
  separator: {
    ...theme.typography.body,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.textPrimary,
  },
  text: {
    ...theme.typography.body,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.textPrimary,
  },
  textRemaining: {
    ...theme.typography.body,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.primary,
  },
  caption: {
    ...theme.typography.caption,
  },
});
