import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

// See rida on KRIITILINE!
// See ütleb Expole: "Ära peida splash pilti automaatselt, kui JS on laetud."
// Me peidame selle hiljem ise käsitsi.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // SIIN TOIMUB SINU RAKENDUSE ETTEVALMISTUS
        // Näiteks:
        // - Lae fonte (await Font.loadAsync(...))
        // - Tee esmane API päring
        // - Lae andmeid kohalikust mälust

        // Simuleerime laadimist 2 sekundit (eemalda see oma päris rakenduses)
        console.log("Rakendus valmistub...");
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Ütle rakendusele, et oleme valmis, sõltumata sellest, kas tekkis viga või mitte.
        setAppIsReady(true);
        console.log("Rakendus on valmis!");
      }
    }

    prepare();
  }, []);

  // See funktsioon käivitub, kui juurvaade (root view) on joonistatud.
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Alles NÜÜD peidame splash ekraani.
      // See tagab sujuva ülemineku ilma valge vilgatuseta.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Kui rakendus pole veel valmis, ära näita midagi (või näita tühja vaadet).
  // Splash ekraan katab seda niikuinii.
  if (!appIsReady) {
    return null;
  }

  // Kui rakendus on valmis, joonista navigatsioon (Stack) ja
  // käivita onLayoutRootView, et peita splash pilt.
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Avaleht" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
