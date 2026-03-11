import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ImageSourcePropType } from "react-native";

const styles = StyleSheet.create({
    navbarStyling: {
        position: "absolute",
        height: 75,
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 65,
        paddingBottom: 10,
    },
    iconStyling: {
        height: 32,
        width: 32,
    }
});

interface NavbarProps {
  selectedTab: "home" | "marker" | "profile";
  onTabPress: (tab: "home" | "marker" | "profile") => void;
}


export function Navbar({ selectedTab, onTabPress }: NavbarProps) {
  const tabs: { key: "home" | "marker" | "profile"; icon: ImageSourcePropType; iconFill: ImageSourcePropType }[] = [
    {
      key: "home",
      icon: require("@/assets/icons/navbar-icons/home.png"),
      iconFill: require("@/assets/icons/navbar-icons/home-fill.png"),
    },
    {
      key: "marker",
      icon: require("@/assets/icons/navbar-icons/marker.png"),
      iconFill: require("@/assets/icons/navbar-icons/marker-fill.png"),
    },
    {
      key: "profile",
      icon: require("@/assets/icons/navbar-icons/profile.png"),
      iconFill: require("@/assets/icons/navbar-icons/profile-fill.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.navbarStyling}>
      {tabs.map((tab) => (
        <Pressable key={tab.key} onPress={() => onTabPress(tab.key)}>
          <Image
            style={styles.iconStyling}
            source={selectedTab === tab.key ? tab.iconFill : tab.icon}
          />
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

export default Navbar;