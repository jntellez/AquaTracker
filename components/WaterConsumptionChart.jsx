import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  getLast7Records, // Importa la función para obtener los últimos 7 registros
} from "../services/storage"; // Ajusta la ruta de tu archivo de servicios
import theme from "../styles/theme"; // Importa el tema

const screenWidth = Dimensions.get("window").width; // Obtiene el ancho de la pantalla

const WaterConsumptionChart = () => {
  const [records, setRecords] = useState([]);

  // Cargar los últimos 7 registros cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const data = await getLast7Records(); // Obtén los últimos 7 registros
      setRecords(data); // Actualiza el estado con los registros
    };
    fetchData();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Array con las abreviaturas de los días de la semana
  const dayAbbreviations = ["D", "L", "M", "X", "J", "V", "S"];

  if (records.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay datos para el gráfico</Text>
      </View>
    );
  }

  // Extraer etiquetas (días de la semana) y datos (consumo)
  const labels = records.map(
    (entry) => dayAbbreviations[new Date(entry.date).getDay()]
  );
  const data = records.map((entry) => entry.totalConsumption);

  return (
    <LineChart
      data={{
        labels: labels, // Abreviaturas de los días
        datasets: [
          {
            data: data, // Valores de consumo
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`, // Azul del tema
            strokeWidth: 2, // Ancho de la línea
          },
        ],
      }}
      width={screenWidth - theme.spacing.medium * 3} // Ancho de la gráfica
      height={220} // Altura de la gráfica
      chartConfig={{
        backgroundColor: theme.colors.background, // Fondo claro
        backgroundGradientFrom: theme.colors.cardBackground,
        backgroundGradientTo: theme.colors.cardBackground,
        decimalPlaces: 1, // Número de decimales
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color de las etiquetas
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color de los textos
        style: {
          borderRadius: theme.borderRadius.medium, // Bordes redondeados
        },
        propsForDots: {
          r: "5",
          strokeWidth: "2",
          stroke: theme.colors.primary, // Color del punto
        },
      }}
      bezier // Hace la línea curva
      style={styles.chart}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chart: {
    borderRadius: theme.borderRadius.medium,
  },
});

export default WaterConsumptionChart;
