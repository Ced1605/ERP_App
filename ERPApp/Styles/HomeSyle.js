import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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
export default HomeStyles;
