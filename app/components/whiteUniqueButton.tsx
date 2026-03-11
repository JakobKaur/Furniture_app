import { Image, View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: "#FFF",
    width: 355,
    height: 90,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  buttonTextStyling: {
    fontFamily: "NunitoSans",
    fontSize: 18,
    fontWeight: "700",
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

interface WhiteUniqueButtonProps {
  label: string;
  desc: string;
  onPress?: () => void;
}

export function WhiteUniqueButton({
  label,
  desc,
  onPress,
}: WhiteUniqueButtonProps) {
  return (
    <Pressable
      style={[styles.buttonStyling, styles.shadowStyle]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonTextStyling}>{label}</Text>
        <Text style={styles.buttonAltStyling}>{desc}</Text>
      </View>
      <Image
        style={styles.arrowIcon}
        source={require("@/assets/icons/arrow.png")}
      />
    </Pressable>
  );
}

export default WhiteUniqueButton;