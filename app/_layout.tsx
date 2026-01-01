import { useFonts } from "expo-font";
import { SplashScreen, Stack } from 'expo-router';
import * as React from 'react';
import 'react-native-reanimated';
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Slot } from 'expo-router'
import { ActivityIndicator, View } from "react-native";



export default function RootLayout() {
     const [loaded] = useFonts({
      "ClashDisplay-Bold": require("../assets/fonts/ClashDisplay-Bold.otf"),
      "Clash-ExtraLight": require("../assets/fonts/ClashDisplay-Extralight.otf"),
      "ClashDisplay-Medium": require("../assets/fonts/ClashDisplay-Medium.otf"),
      "ClashDisplay-Regular": require("../assets/fonts/ClashDisplay-Regular.otf"),
      "ClashDisplay-Semibold": require("../assets/fonts/ClashDisplay-Semibold.otf"),
      // inter 
      "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
      "Inter-Medium": require("../assets/fonts/Inter-Medium.otf"), 
      "Inter-SemiBold": require("../assets/fonts/Inter-Bold.otf"), 

      // poppins 
      "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
    });
  
    React.useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
     if (!loaded) {
        return (
          <View className="flex-1 justify-center items-center bg-[#CCFF66]">
            <ActivityIndicator size="large" color="#023327" />
          </View>
        );
      }
    
    if (!loaded) return null;
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <StatusBar
  style="dark"
  translucent
  backgroundColor="transparent"
/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
