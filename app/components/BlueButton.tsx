import { Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: "#4F63AC",
    borderRadius: 8,
    width: 303,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonTextStyling: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});

interface BlueButtonProps {
  label: string;
  onPress?: () => void;
}

export function BlueButton({ label, onPress }: BlueButtonProps) {
  return (
    <Pressable style={styles.buttonStyling} onPress={onPress}>
      <Text style={styles.buttonTextStyling}>{label}</Text>
    </Pressable>
  );
}

export default BlueButton;