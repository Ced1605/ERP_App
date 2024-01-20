// OrderStyles.js
import { StyleSheet } from "react-native";
import { colors } from "../assets/color";

const OrderStyles = StyleSheet.create({
  Order: {
    flex: 1,
  },
  toolbox: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#5959cf",
  },
  customButton: {
    marginRight: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default OrderStyles;
