import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useWaterConsumption } from "../store/WaterConsumptionStore"; // Accedemos a la store
import { useRouter } from "expo-router"; // Usamos el router de expo-router para navegar
import { saveUserInfo, getUserInfo } from "../services/storage"; // Importamos las funciones de storage
import theme from "../styles/theme"; // Importamos el tema

const UserInfoForm = () => {
  const { setUserInfo } = useWaterConsumption(); // Función de la store para guardar los datos del usuario
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dailyWaterGoal, setDailyWaterGoal] = useState(""); // Meta de agua diaria
  const router = useRouter(); // Usamos el router para navegar a otras pantallas

  // Cargar la información del usuario cuando el componente se monta
  useEffect(() => {
    const loadUserInfo = async () => {
      const storedUserInfo = await getUserInfo();
      if (storedUserInfo) {
        setName(storedUserInfo.name);
        setAge(storedUserInfo.age.toString());
        setDailyWaterGoal(storedUserInfo.dailyWaterGoal.toString());
        setUserInfo(storedUserInfo); // Guardamos la info en el store
        // Si ya hay datos, redirigimos directamente a la pantalla de inicio (stats, por ejemplo)
        router.replace("/home");
      }
    };

    loadUserInfo();
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  const handleSubmit = async () => {
    // Validar la entrada
    if (!name || !age || !dailyWaterGoal) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    if (isNaN(age) || parseInt(age, 10) <= 0) {
      Alert.alert("Error", "La edad debe ser un número positivo.");
      return;
    }

    if (isNaN(dailyWaterGoal) || parseFloat(dailyWaterGoal) <= 0) {
      Alert.alert(
        "Error",
        "La meta de agua diaria debe ser un número positivo."
      );
      return;
    }

    const userInfo = {
      name,
      age: parseInt(age, 10),
      dailyWaterGoal: parseFloat(dailyWaterGoal),
    };

    // Guardamos la información del usuario en la store y en AsyncStorage
    await saveUserInfo(userInfo);
    setUserInfo(userInfo);

    // Cerrar el teclado
    Keyboard.dismiss();

    // Navegamos a la siguiente pantalla (por ejemplo, a la pantalla de estadísticas)
    router.replace("/home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bienvenido a AquaTracker</Text>
        <Text style={styles.subtitle}>Por favor ingresa tu información</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Meta de agua diaria (litros)"
          value={dailyWaterGoal}
          onChangeText={setDailyWaterGoal}
          keyboardType="numeric"
        />

        <Button title="Guardar" onPress={handleSubmit} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el ScrollView crezca para abarcar todo el espacio disponible
    justifyContent: "center",
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background, // Usamos el color de fondo del tema
  },
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    marginBottom: theme.spacing.small,
    color: theme.colors.textPrimary, // Usamos el color de texto principal del tema
  },
  subtitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.textSecondary, // Usamos el color de texto secundario del tema
    marginBottom: theme.spacing.large,
  },
  input: {
    height: 40,
    borderColor: theme.colors.border, // Usamos el color del borde del tema
    borderWidth: 1,
    borderRadius: theme.borderRadius.small,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.small,
  },
});

export default UserInfoForm;
