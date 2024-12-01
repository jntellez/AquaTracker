import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useWaterConsumption } from "../store/WaterConsumptionStore";

const ActivityInput = () => {
  const { addActivity } = useWaterConsumption(); // Función para agregar actividades
  const [activityName, setActivityName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddActivity = () => {
    const newActivity = {
      activityName,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };

    // Agregar actividad al registro
    addActivity(newActivity);

    setActivityName("");
    setAmount("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Actividad de Consumo de Agua</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la actividad"
        value={activityName}
        onChangeText={setActivityName}
      />

      <TextInput
        style={styles.input}
        placeholder="Cantidad de agua (litros)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button title="Agregar actividad" onPress={handleAddActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ActivityInput;
