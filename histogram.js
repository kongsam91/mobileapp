import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;


const Histogram = () => {
  const [chartData, setChartData] = useState([]);

  const isFocused = useIsFocused();
  React.useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = async () => {
    try {
      const newCase = await AsyncStorage.getItem('newCase');
      console.log("Fetched newCase:", newCase);
      if (newCase != null) {
        const parsedData = JSON.parse(newCase);
        console.log("Parsed Data:", parsedData);
        const aggregatedData = aggregateData(parsedData);
        console.log("Aggregated Data:", aggregatedData);
        const formattedData = formatChartData(aggregatedData);
        console.log("Formatted Data for Chart:", formattedData);
        setChartData(formattedData);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const aggregateData = (data) => {
    const aggregation = {};
    data.forEach(item => {
      if (aggregation[item.kind]) {
        aggregation[item.kind] += parseFloat(item.cost);
      } else {
        aggregation[item.kind] = parseFloat(item.cost);
      }
    });
    return aggregation;
  };

  const formatChartData = (data) => {
    return Object.keys(data).map((key, index) => ({
      name: key,
      cost: data[key],
      color: getRandomColor(),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={styles.container}>
      {chartData.length > 0 ? (
        <PieChart
          data={chartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          accessor="cost"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Histogram;
