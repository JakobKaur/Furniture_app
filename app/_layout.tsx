import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
      const prepare = async () => {
        try {
          await Font.loadAsync({
            DM_Sans: require("@/assets/fonts/DMSans.ttf"),
            Montserrat: require("@/assets/fonts/Montserrat.ttf"),
            NunitoSans: require("@/assets/fonts/NunitoSans.ttf"),
            Gelasio: require("@/assets/fonts/Gelasio.ttf"),
          });
        } catch (e) {
          console.warn(e);
        } finally {
          await SplashScreen.hideAsync();
        }
      };
      prepare();
    }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="app" options={{ headerShown: false }} />
      <Stack.Screen name="productview" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="listings" options={{ headerShown: false }} />
      <Stack.Screen name="newlisting" options={{ headerShown: false }} />
    </Stack>
  );
}