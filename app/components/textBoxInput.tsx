import { View, Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textBoxStyling: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    textAlignVertical: "center",
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#8D9BB5",
    width: 303,
    height: 60,
    marginTop: 9,
  },
  textStyling: {
    color: "#4F63AC",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "500",
  },
});

interface TextBoxProps {
  label: string;
  text?: string;
  placeholder?: string;
  onChangeText?: () => void;
  safeInput?: boolean;
}

export function TextBox({ label, onChangeText, text, placeholder, safeInput}: TextBoxProps) {
  return (
    <View>
      <Text style={styles.textStyling}>{label}</Text>
      <TextInput
        style={styles.textBoxStyling}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={safeInput}
        placeholderTextColor="#c5c5c5"
        placeholder={placeholder}
      />
    </View>
  );
}

export default TextBox;