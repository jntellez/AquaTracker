import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import theme from "../../styles/theme";
import LogHeader from "../../components/log/LogHeader";
import { useRouter } from "expo-router";
import { getLastRecord } from "../../services/storage";
import ActivityCard from "../../components/log/ActivityCard";

const AddWaterIntakeScreen = () => {
  const [activities, setActivities] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLastRecord();
      if (data && data.activities.length > 0) {
        setActivities(data.activities);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <LogHeader />

      {/* Lista de actividades */}
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Actividades Registradas</Text>
        }
        renderItem={({ item }) => <ActivityCard data={item} />}
      />

      {/* Botón para añadir actividad */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("selectActivity")}
      >
        <Text style={styles.addButtonText}>Añadir Actividad</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    padding: theme.spacing.medium,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  addButton: {
    margin: theme.spacing.medium,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.buttonBackground,
    alignItems: "center",
    borderRadius: theme.borderRadius.small,
  },
  addButtonText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.buttonText,
    fontWeight: "bold",
  },
});

export default AddWaterIntakeScreen;
