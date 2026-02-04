import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 18,
    justifyContent: "flex-start",
    paddingBottom: 40,
  },
  content: {
    flex: 1,
  },
  actions: {
    marginTop: 20,
  },
  submitButton: {
    marginTop: 16,
  },
});