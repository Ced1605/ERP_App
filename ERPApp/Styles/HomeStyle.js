// HomeStyle.js

import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../assets/color";

let windowWidth = Dimensions.get("window").width;
let windowHight = Dimensions.get("window").height;

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  patternContainer: {
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: windowWidth > 600 ? "row" : "column", // Ändere die Schwellenwerte nach Bedarf
    marginBottom: 5,
  },
  item: {
    flex: 1,
    width: windowWidth > 600 ? windowWidth / 2 - 20 : windowWidth - 20,
    height: windowHight / 2 - 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bordercolor2,
    backgroundColor: colors.background2,
    margin: 5,
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    padding: 10,
  },
  itemKalender: {
    flex: 1,
    width: windowWidth > 600 ? windowWidth / 2 - 20 : windowWidth - 20,
    height: windowHight > 940 || windowWidth > 600 ? windowHight / 2 - 50 : 450,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bordercolor2,
    backgroundColor: colors.background2,
    margin: 5,
  },
  itemProducts: {
    flex: 1,
    width: windowWidth > 600 ? windowWidth / 2 - 20 : windowWidth - 20,
    height: windowHight > 940 || windowWidth > 600 ? windowHight / 2 - 50 : 450,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.bordercolor2,
    backgroundColor: colors.background2,
    margin: 5,
  },
});

export default HomeStyles;
