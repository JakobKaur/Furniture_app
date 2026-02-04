import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.black,
  },
  innerTitle: {
    color: Colors.orange,
    textDecorationLine: "underline",
  },
  footerText: {
    color: Colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 30,
  },
});