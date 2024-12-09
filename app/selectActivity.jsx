import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ActivitiesList from "../components/log/ActivitiesList"; // Asegúrate de tener el componente ActivitiesList
import AddActivity from "../components/log/AddActivity"; // Asegúrate de tener el componente AddActivityForm
import theme from "../styles/theme"; // Asegúrate de que esté correctamente configurado

const activities = [
  { id: 1, name: "Correr", time: "2024-12-04T08:30:00", amount: 300 },
  { id: 2, name: "Nadar", time: "2024-12-04T10:00:00", amount: 200 },
  { id: 3, name: "Bicicleta", time: "2024-12-04T12:00:00", amount: 250 },
  // Otras actividades...
];

export default function SelectActivity() {
  const [log, setLog] = useState([]);
  const [activeTab, setActiveTab] = useState("list"); // Estado para controlar la pestaña activa

  const handleAddActivity = (activity) => {
    setLog((prevLog) => [...prevLog, activity]); // Agrega la actividad al log
  };

  const handleSaveLog = () => {
    // Aquí podrías guardar el log en algún lugar o enviarlo a un backend
    console.log("Log guardado:", log);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Actividad</Text>

      {/* Pestañas */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "list" && styles.activeTab, // Resalta la pestaña activa
          ]}
          onPress={() => setActiveTab("list")}
        >
          <Text style={styles.tabText}>Lista de Actividades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "form" && styles.activeTab, // Resalta la pestaña activa
          ]}
          onPress={() => setActiveTab("form")}
        >
          <Text style={styles.tabText}>Registrar Actividad</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido según la pestaña activa */}
      {activeTab === "list" ? (
        <ActivitiesList
          activities={activities}
          onAddActivity={handleAddActivity}
        />
      ) : (
        <AddActivity onAddActivity={handleAddActivity} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    marginHorizontal: theme.spacing.medium,
    marginTop: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.small,
  },
  tabButton: {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.large,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
  logTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.medium,
  },
  noLog: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
  },
  logItem: {
    fontSize: 16,
    color: theme.colors.textPrimary,
    marginVertical: theme.spacing.small / 2,
  },
});
