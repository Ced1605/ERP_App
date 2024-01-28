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
    alignItems: "center",
    justifyContent: "space-between",
  },
  customButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    margin: 5,
  },
});
export default ProductsStyles;
