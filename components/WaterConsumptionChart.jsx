import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width; // Obtiene el ancho de la pantalla

const WaterConsumptionChart = ({ data, labels }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de agua (litros)</Text>
      <LineChart
        data={{
          labels: labels, // Ejemplo: ["Lun", "Mar", "Mié", "Jue", "Vie"]
          datasets: [
            {
              data: data, // Ejemplo: [2.5, 3.0, 2.8, 3.2, 2.6]
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Color de la línea
              strokeWidth: 2, // Ancho de la línea
            },
          ],
        }}
        width={screenWidth - 40} // Ancho de la gráfica
        height={220} // Altura de la gráfica
        chartConfig={{
          backgroundColor: "#eaf4ff",
          backgroundGradientFrom: "#eaf4ff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1, // Número de decimales
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color de las etiquetas
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color de los textos
          style: {
            borderRadius: 8,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#007aff",
          },
        }}
        bezier // Hace la línea curva
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007aff",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default WaterConsumptionChart;
