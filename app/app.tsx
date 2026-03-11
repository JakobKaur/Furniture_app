import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeTab } from "@/app/tabs/homeTab";
import { FavoriteTab } from "@/app/tabs/favoriteTab";
import { ProfileTab } from "@/app/tabs/profileTab";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    marginTop: 20,
  },
});

export default function App() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        // 👇 navbar styling to match your old one
        tabBarStyle: {
          height: 75,
          justifyContent: "center",
        },

        // 👇 icon switching logic (outline vs fill)
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("@/assets/icons/navbar-icons/home-fill.png")
              : require("@/assets/icons/navbar-icons/home.png");
          }

          if (route.name === "Marker") {
            icon = focused
              ? require("@/assets/icons/navbar-icons/marker-fill.png")
              : require("@/assets/icons/navbar-icons/marker.png");
          }

          if (route.name === "Profile") {
            icon = focused
              ? require("@/assets/icons/navbar-icons/profile-fill.png")
              : require("@/assets/icons/navbar-icons/profile.png");
          }

          return <Image source={icon} style={styles.icon} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Marker" component={FavoriteTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}