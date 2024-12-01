import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default function Log() {
  const { colors } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.primary }]}>
        Esta es la pantalla de Registro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
