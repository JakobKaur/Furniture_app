import { Image, View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: "#FFF",
    width: 355,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 4,
  },
  buttonTextStyling: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "700",
    color: "#4f63ac",
    marginLeft: 25,
    marginBottom: 5,
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

interface WhiteUniqueButtonNDProps {
  label: string;
  onPress?: () => void;
}

export function WhiteUniqueButtonND({
  label,
  onPress,
}: WhiteUniqueButtonNDProps) {
  return (
    <Pressable
      style={[styles.buttonStyling, styles.shadowStyle]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonTextStyling}>{label}</Text>
      </View>
      <Image
        style={styles.arrowIcon}
        source={require("@/assets/icons/arrow.png")}
      />
    </Pressable>
  );
}

export default WhiteUniqueButtonND;