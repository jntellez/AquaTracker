import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import WaterConsumptionDailyChart from "./WaterConsumptionDailyChart";
import WaterConsumptionChart from "./WaterConsumptionChart";
import theme from "../styles/theme";

const screenWidth = Dimensions.get("window").width;

const ChartSlider = ({ firstSemanal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de Agua</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {firstSemanal ? (
          <>
            <View
              style={[
                styles.chartContainer,
                { marginLeft: theme.spacing.medium },
              ]}
            >
              <WaterConsumptionChart />
            </View>
            <View
              style={[
                styles.chartContainer,
                { marginHorizontal: theme.spacing.medium },
              ]}
            >
              <WaterConsumptionDailyChart />
            </View>
          </>
        ) : (
          <>
            <View
              style={[
                styles.chartContainer,
                { marginHorizontal: theme.spacing.medium },
              ]}
            >
              <WaterConsumptionDailyChart />
            </View>
            <View
              style={[
                styles.chartContainer,
                { marginRight: theme.spacing.medium },
              ]}
            >
              <WaterConsumptionChart />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
    marginLeft: theme.spacing.medium,
  },
  carouselContainer: {
    alignItems: "center",
  },
  chartContainer: {
    width: screenWidth - theme.spacing.medium * 3,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
  },
});

export default ChartSlider;
