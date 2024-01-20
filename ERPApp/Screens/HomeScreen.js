import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import HomeStyles from "../Styles/HomeStyle";
import CalendarComponent from "../components/CalenderComponent";
import CurrentOrdersComponent from "../components/OrderComponent";
import EmptyProductMonitorComponent from "../components/EmptyProductsComponent";
import orders from "../Data/Order";

const HomeScreen = () => {
  return (
    <FlatList
      data={[{ key: "dummy" }]}
      renderItem={() => (
        <View style={HomeStyles.container}>
          <View style={HomeStyles.patternContainer}>
            <View style={HomeStyles.row}>
              <View style={HomeStyles.itemKalender}>
                <Text style={HomeStyles.text}>Kalender</Text>
                <CalendarComponent />
              </View>
              <View style={HomeStyles.itemProducts}>
                <ScrollView style={HomeStyles.scrollView}>
                  <EmptyProductMonitorComponent />
                </ScrollView>
              </View>
            </View>
            <View style={HomeStyles.row}>
              <View style={HomeStyles.item}>
                <ScrollView style={HomeStyles.scrollView}>
                  <CurrentOrdersComponent orders={orders} />
                </ScrollView>
              </View>
              <View style={HomeStyles.item}>
                <Text style={HomeStyles.text}>Statistiken</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default HomeScreen;
