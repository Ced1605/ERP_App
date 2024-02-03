import { StyleSheet } from "react-native";
import colors from "../assets/color";

const ProductsStyles = StyleSheet.create({
  Order: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  toolbox: {
    flexDirection: "row",
    backgroundColor: colors.color2,
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
    color: colors.text,
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
