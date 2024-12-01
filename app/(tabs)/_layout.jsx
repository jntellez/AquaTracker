import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../styles/theme";

export default function TabsLayout() {
  const { colors } = theme;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background, // Fondo del tab bar
        },
        tabBarActiveTintColor: colors.primary, // Color activo de los tabs
        tabBarInactiveTintColor: colors.textSecondary, // Color inactivo de los tabs
        headerShown: false, // No mostrar el encabezado en los tabs
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          tabBarLabel: "Estadísticas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="log"
        options={{
          tabBarLabel: "Registro",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          tabBarLabel: "Consejos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
