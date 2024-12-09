import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import theme from "../../styles/theme"; // Asegúrate de tener correctamente configurado el tema

export default function AddActivityForm({ onCreateActivity }) {
  const [name, setName] = useState(""); // Para almacenar el nombre de la actividad
  const [amount, setAmount] = useState(""); // Para almacenar el consumo de agua

  const handleSubmit = () => {
    if (!name.trim() || !amount.trim()) {
      Alert.alert("Error", "Por favor, llena todos los campos.");
      return;
    }

    const newActivity = {
      id: Date.now(), // Generar un ID único basado en el timestamp
      name: name.trim(),
      amount: parseFloat(amount), // Convertir a número decimal
      time: Date.now(), // Timestamp actual
    };

    if (onCreateActivity) {
      onCreateActivity(newActivity); // Llamar a la función para crear la actividad
    }

    // Limpiar el formulario después de la creación
    setName("");
    setAmount("");
    Alert.alert("Éxito", "Actividad creada correctamente.");
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Nombre de la actividad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Ducha"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Consumo de agua (en litros):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 1.7"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Crear Actividad" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  label: {
    fontSize: 18,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.small,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.small,
    fontSize: 16,
    marginBottom: theme.spacing.medium,
    borderRadius: theme.borderRadius,
  },
});
