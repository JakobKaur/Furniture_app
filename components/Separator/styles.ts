import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.line,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 12,
    color: Colors.grey,
    fontWeight: "600",
  },
});