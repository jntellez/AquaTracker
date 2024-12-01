import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useWaterConsumption } from "../../store/WaterConsumptionStore"; // Acceder a la store
import WaterConsumptionChart from "../../components/WaterConsumptionChart";

const Stats = () => {
  const { userInfo, dailyConsumption } = useWaterConsumption(); // Acceder a la información del usuario
  const data = [2.5, 3.0, 2.8, 3.2, 2.6]; // Consumo de agua (litros)
  const labels = ["Lun", "Mar", "Mié", "Jue", "Vie"]; // Días de la semana

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Estadísticas</Text>

        <Text style={styles.info}>Nombre: {userInfo.name}</Text>
        <Text style={styles.info}>Edad: {userInfo.age}</Text>
        <Text style={styles.info}>
          Meta diaria de agua: {userInfo.dailyWaterGoal} Litros
        </Text>

        <Text style={styles.info}>Consumo diario:</Text>
        {dailyConsumption.map((activity, index) => (
          <Text key={index} style={styles.info}>
            {activity.activityName} - {activity.amount} Litros
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        <WaterConsumptionChart data={data} labels={labels} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Stats;
