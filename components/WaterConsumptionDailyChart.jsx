import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { getLastRecord } from "../services/storage";
import theme from "../styles/theme";

const screenWidth = Dimensions.get("window").width;

const WaterConsumptionDailyChart = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLastRecord();
      if (data && data.activities.length > 0) {
        setActivities(data.activities);
      }
    };
    fetchData();
  }, []);

  if (activities.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay datos para el gráfico</Text>
      </View>
    );
  }

  const labels = activities.map((activity) =>
    new Date(activity.time).toLocaleTimeString()
  );
  const data = activities.map((activity) => activity.amount);

  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            strokeWidth: 2,
          },
        ],
      }}
      width={screenWidth - theme.spacing.medium * 3}
      height={220}
      chartConfig={{
        backgroundColor: theme.colors.background,
        backgroundGradientFrom: theme.colors.cardBackground,
        backgroundGradientTo: theme.colors.cardBackground,
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: theme.borderRadius.medium,
        },
        propsForDots: {
          r: "5",
          strokeWidth: "2",
          stroke: theme.colors.primary,
        },
      }}
      bezier
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

export default WaterConsumptionDailyChart;
