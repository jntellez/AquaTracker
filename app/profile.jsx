import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import { useWaterConsumption } from "../store/WaterConsumptionStore"; // Accedemos a la store
import { saveUserInfo, getUserInfo, removeUserInfo } from "../services/storage"; // Importamos las funciones de storage
import { useRouter } from "expo-router"; // Usamos el router para navegar
import theme from "../styles/theme"; // Importamos el tema

const Profile = () => {
  const { userInfo, setUserInfo } = useWaterConsumption(); // Accedemos a la info del usuario desde la store
  const [name, setName] = useState(userInfo?.name || "");
  const [age, setAge] = useState(userInfo?.age.toString() || "");
  const [dailyWaterGoal, setDailyWaterGoal] = useState(
    userInfo?.dailyWaterGoal.toString() || ""
  );
  const router = useRouter(); // Usamos el router de expo-router

  // Cargar la información del usuario cuando el componente se monta
  useEffect(() => {
    const loadUserInfo = async () => {
      const storedUserInfo = await getUserInfo();
      if (storedUserInfo) {
        setName(storedUserInfo.name);
        setAge(storedUserInfo.age.toString());
        setDailyWaterGoal(storedUserInfo.dailyWaterGoal.toString());
      }
    };

    loadUserInfo();
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  // Función para actualizar los datos del usuario
  const handleUpdate = async () => {
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
    setUserInfo(userInfo); // Actualizamos el store con los nuevos datos

    // Cerrar el teclado
    Keyboard.dismiss();

    Alert.alert("Éxito", "La información del usuario ha sido actualizada.");
  };

  // Función para borrar los datos del usuario y redirigir a la ruta "/"
  const handleRemoveData = async () => {
    await removeUserInfo(); // Borrar los datos de AsyncStorage
    setUserInfo(null); // Limpiar el store también
    setName(""); // Limpiar los campos
    setAge(""); // Limpiar los campos
    setDailyWaterGoal(""); // Limpiar los campos

    // Redirigir a la ruta "/"
    router.replace("/");

    Alert.alert(
      "Datos eliminados",
      "La información del usuario ha sido eliminada."
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Perfil de Usuario
        </Text>

        <TextInput
          style={[styles.input, { borderColor: theme.colors.border }]}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, { borderColor: theme.colors.border }]}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, { borderColor: theme.colors.border }]}
          placeholder="Meta de agua diaria (litros)"
          value={dailyWaterGoal}
          onChangeText={setDailyWaterGoal}
          keyboardType="numeric"
        />

        <Button
          title="Actualizar Información"
          onPress={handleUpdate}
          color={theme.colors.buttonBackground}
        />
        <Button title="Borrar Datos" onPress={handleRemoveData} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    marginBottom: theme.spacing.medium,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.small,
  },
});

export default Profile;
