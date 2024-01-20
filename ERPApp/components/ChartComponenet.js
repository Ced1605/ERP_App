import React, { useLayoutEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../assets/color";

const ChartComponent = ({ data, labels, chartRef }) => {
  const [chartHeight, setChartHeight] = useState(0);
  const screenWidh = Dimensions.get("window").width;
  const chartWidth = screenWidh > 600 ? screenWidh / 2 - 60 : screenWidh - 60;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setChartHeight(height);
  };

  useLayoutEffect(() => {
    if (chartHeight && chartRef.current) {
    }
  }, [chartHeight, chartRef]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.title}>Statistiken</Text>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        width={chartWidth}
        height={chartHeight}
        yAxisLabel=""
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    fontFamily: "Arial",
    flex: 1,
  },
});

export default ChartComponent;
