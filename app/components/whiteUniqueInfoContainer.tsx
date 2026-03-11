import { Image, View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: "#FFF",
    width: 355,
    height: 74,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 4,
  },
  buttonTextStyling: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "600",
    color: "#4f63ac",
    marginLeft: 25,
    marginBottom: 5,
  },
  buttonAltStyling: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    fontWeight: "400",
    color: "#808080",
    marginLeft: 25,
  },
  shadowStyle: {
    // iOS
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 40,

    // Android
    elevation: 10,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 10,
  },
});

interface WhiteUniqueInfoContainerProps {
  label: string;
  desc: string;
  onPress?: () => void;
}

export function WhiteUniqueInfoContainer({
  label,
  desc,
  onPress,
}: WhiteUniqueInfoContainerProps) {
  return (
    <View
      style={[styles.buttonStyling, styles.shadowStyle]}
    >
      <View>
        <Text style={styles.buttonAltStyling}>{label}</Text>
        <Text style={styles.buttonTextStyling}>{desc}</Text>
      </View>
    </View>
  );
}

export default WhiteUniqueInfoContainer;