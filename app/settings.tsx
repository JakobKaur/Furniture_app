import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WhiteUniqueInfoContainer } from "@/app/components/whiteUniqueInfoContainer";
import { WhiteUniqueButtonND } from "@/app/components/whiteUniqueButtonND";
import { BlueButton } from "@/app/components/blueButton";
import { router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  headerStyling: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
    width: "90%",
  },
  headerTextStyling: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  shareIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
  },
  userInfo: {
    alignItems: "flex-start",
    flexDirection: "column",
    width: "80%",
    marginBottom: 36,
  },
  userName: {
    fontFamily: "NunitoSans",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "left",
    color: "#303030",
    marginBottom: 12,
  },
  userMail: {
    fontFamily: "NunitoSans",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    color: "#808080",
  },
  buttonsContainer: {
    gap: 20,
  },
  anlButton: {
    position: "absolute",
    bottom: 30,
  },
  headerInfo: {
    alignItems: "center",
    height: 30,
    width: "86%",
    marginBottom: 15,
  },
  headerInfoText: {
    position: "absolute",
    left: 0,
    color: "#909191",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Nunito Sans",
  },
  headerInfoIcon: {
    position: "absolute",
    right: 0,
    height: 19,
    width: 16,
  },
  helpCenterContainer: {
    gap: 15,
  },
});

export default function ProfileTab() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerStyling}>
        <Text style={styles.headerTextStyling}>Settings</Text>
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.headerInfoText}>Personal Information</Text>
        <Image
          style={styles.headerInfoIcon}
          source={require("@/assets/icons/edit.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <WhiteUniqueInfoContainer label="Name" desc="Alex Sassu Sass Pass" />
        <WhiteUniqueInfoContainer label="Email" desc="alex@gmail.com" />
      </View>
      <View style={[styles.headerInfo, {marginTop: 40}]}>
        <Text style={styles.headerInfoText}>Help Center</Text>
      </View>
      <View style={styles.helpCenterContainer}>
        <WhiteUniqueButtonND label="FAQ" />
        <WhiteUniqueButtonND label="Contact Us" />
        <WhiteUniqueButtonND label="Privacy & Terms" />
      </View>
    </SafeAreaView>
  );
}