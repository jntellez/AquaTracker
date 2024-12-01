import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function Logo({ color, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require("../assets/images/logo.png")} // Asegúrate de que la ruta del logo sea correcta
        style={[styles.logo, { tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 40, // Tamaño por defecto del logo
    height: 40, // Tamaño por defecto del logo
  },
});
