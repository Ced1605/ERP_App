import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeStyles from "../Styles/HomeSyle";

const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.patternContainer}>
        <View style={HomeStyles.row}>
          <View style={HomeStyles.item}>
            <Text style={HomeStyles.text}>Kalender</Text>
          </View>
          <View style={HomeStyles.item}>
            <Text style={HomeStyles.text}>Lehre Produkte</Text>
          </View>
        </View>
        <View style={HomeStyles.row}>
          <View style={HomeStyles.item}>
            <Text style={HomeStyles.text}>Aufträge</Text>
          </View>
          <View style={HomeStyles.item}>
            <Text style={HomeStyles.text}>Statistiken</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
