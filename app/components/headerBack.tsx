import { Pressable, Text, TextInput, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

const styles = StyleSheet.create({
    pressableStyling: { 
        flexDirection: "row", 
        alignItems: "center", 
        gap:15, 
        marginBottom: 20 
    },
    imageStyling: {
        width: 18, 
        height: 18
    },
    textStyling: { 
        fontFamily: "Montserrat",
        fontSize: 26,
        color: "#4F63AC",
        fontWeight: "600" 
    }
});

interface HeaderBackProps {
  text?: string;
}

export function HeaderBack({ text }: HeaderBackProps) {
  return (
   <Pressable onPress={() => router.back()} style={styles.pressableStyling}>
        <Image style={styles.imageStyling} source={require("@/assets/icons/icons_back.png")} />
        <Text style={styles.textStyling}>{text}</Text>
    </Pressable>
  );
}

export default HeaderBack;