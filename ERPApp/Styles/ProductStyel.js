import { StyleSheet } from "react-native";
import { colors } from "../assets/color";

const ProductsStyles = StyleSheet.create({
  Order: {
    flex: 1,
  },
  toolbox: {
    flexDirection: "row",
    backgroundColor: "#5959cf",
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
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
export default ProductsStyles;
