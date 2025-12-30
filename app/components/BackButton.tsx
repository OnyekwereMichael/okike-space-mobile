import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/constants";

interface BackButtonProps {
  size?: number;
  tintColor?: string;
  style?: object;
  fallbackRoute?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  size = 30,
  tintColor = "#000",
  style,
  fallbackRoute = "/",
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(fallbackRoute);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handleBack}
      activeOpacity={0.7}
    >
      <Image
        source={icons.arrowBack}
        style={{ width: size, height: size, tintColor }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default BackButton;
