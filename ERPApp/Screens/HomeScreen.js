import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.patternContainer}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.text}>Kalender</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Lehre Produkte</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.text}>Aufträge</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Statistiken</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  patternContainer: {
    marginTop: 60,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  item: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#3498db",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "9%",
    paddingHorizontal: "18%",
  },
  text: {
    color: "#fff",
  },
});

export default HomeScreen;
