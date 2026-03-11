import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WhiteUniqueButton } from "@/app/components/whiteUniqueButton";
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
    gap: 30,
  },
  anlButton: {
    position: "absolute",
    bottom: 30,
  },
});

export function ProfileTab() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerStyling}>
        <Text style={styles.headerTextStyling}>Profile</Text>
        <Image
          style={styles.shareIcon}
          source={require("@/assets/icons/share.png")}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Timo</Text>
        <Text style={styles.userMail}>timo@gmail.com</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <WhiteUniqueButton
          label="My Listings"
          desc="You already have 50 listings"
          onPress={() => router.push("/listings")}
        />
        <WhiteUniqueButton label="Settings" desc="Account, FAQ, Contact" onPress={() => router.push("/settings")}/>
      </View>
      <View style={styles.anlButton}>
        <BlueButton label="Add a new listing" onPress={() => router.push("/newlisting")}/>
      </View>
    </SafeAreaView>
  );
}