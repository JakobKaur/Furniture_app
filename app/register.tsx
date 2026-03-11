import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { BlueButton } from "@/app/components/blueButton";
import { TextBox } from "@/app/components/textBoxInput";
import { HeaderBack } from "@/app/components/headerBack";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { AdvancedCheckbox } from "react-native-advanced-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  backButtonContainer: {
    top: 1,
  },
  inputFields: {
    marginTop: 54,
    gap: 20,
    width: 303,
    alignContent: "center",
    alignItems: "flex-start",
  },
  otherOptions: {
    marginTop: 38,
    gap: 20,
    width: 303,
    alignContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#ffffff",
  },
  termsPrivacyView: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 13,
    backgroundColor: "#ffffff",
  },
  normalText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "500",
    color: "#4F63AC",
  },
  normalTextBold: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "600",
    color: "#4F63AC",
  },
  normalTextBolder: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "700",
    color: "#4F63AC",
  },
  googleButton: {
    backgroundColor: "#3f4a59",
    width: 142,
    height: 60,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    width: 28,
    height: 28,
  },
});

export default function Register() {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack text="Sign Up"></HeaderBack>
      <View style={{alignItems: "center"}}>
        <View style={styles.inputFields}>
          <TextBox label="Name" placeholder="John Doe"></TextBox>
          <TextBox label="E-mail" placeholder="example@gmail.com"></TextBox>
          <TextBox label="Password" safeInput={true}></TextBox>
          <View style={styles.termsPrivacyView}>
            <AdvancedCheckbox
              value={checked}
              onValueChange={(value) =>
                setChecked(typeof value === "boolean" ? value : false)
              }
              checkedColor="#007AFF"
              uncheckedColor="#ccc"
              checkedImage={require("@/assets/icons/checked.png")}
              animationType="fade"
              size={24}
            />
            <Text style={styles.normalText}>
              I agree with{" "}
              <Link style={styles.normalTextBolder} href="/">
                Terms
              </Link>{" "}
              &{" "}
              <Link style={styles.normalTextBolder} href="/">
                Privacy
              </Link>
            </Text>
          </View>
          <BlueButton label="Sign Up" onPress={() => router.push("/app")}></BlueButton>
        </View>
      
      <View style={styles.otherOptions}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{ height: 1, width: 90, backgroundColor: "#DADADA" }}
          ></View>
          <Text style={styles.normalTextBold}>Or sign up with</Text>
          <View
            style={{ height: 1, width: 90, backgroundColor: "#DADADA" }}
          ></View>
        </View>
        <Pressable style={styles.googleButton}>
          <Image
            style={styles.googleIcon}
            source={require("@/assets/icons/google.png")}
          />
        </Pressable>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={styles.normalText}>
                Already have an account?{" "}
                <Link style={styles.normalTextBolder} href="/login">
                  Sign In
                </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}