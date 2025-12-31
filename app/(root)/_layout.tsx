import { SplashScreen, Stack } from 'expo-router';
import * as React from 'react';
import 'react-native-reanimated';
import "@/global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";



export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
