import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import ActivityCard from "./ActivityCard"; // Asegúrate de tener este componente creado
import theme from "../../styles/theme"; // Asegúrate de que esté correctamente configurado

export default function ActivitiesList({ activities, onAddActivity }) {
  // Función para manejar la selección de una actividad
  const handleSelect = (activity) => {
    onAddActivity(activity); // Llama a la función para agregar la actividad al log
  };

  // Renderiza cada item de la lista
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleSelect(item)}>
        <ActivityCard data={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={activities} // Lista de actividades
        renderItem={renderItem} // Función para renderizar cada actividad
        keyExtractor={(item) => item.id.toString()} // Utiliza un identificador único para cada actividad
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.medium,
    paddingTop: theme.spacing.medium,
  },
  list: {
    paddingBottom: theme.spacing.medium,
  },
});
