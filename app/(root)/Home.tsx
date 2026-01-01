import React, { useEffect, useRef } from "react";
import { Text, ScrollView, View, Animated, Easing } from "react-native";

export default function HomeScreen() {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 1,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -1,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotation = shakeAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-15deg", "15deg"],
  });

  return (
    <ScrollView
      className="bg-white px-5 pt-10"
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-1 flex-row items-center">
        <Text className="text-[28px] font-Clash-Bold text-[#1C0067] ">
          Welcome Home{" "}
        </Text>

        <Animated.Text
          style={{
            transform: [{ rotate: rotation }],
          }}
          className="text-[20px]"
        >
          👋
        </Animated.Text>
      </View>

      <Text className="text-[15px] text-gray-500 font-Clash-Semibold mb-6">
        Let’s get things ready for you
      </Text>

      {/* Info Card */}
      <View className="bg-[#F5F3FF] rounded-2xl p-5 mb-6">
        <Text className="text-[18px] font-Clash-Semibold text-[#1C0067] mb-2">
          Complete your setup
        </Text>
        <Text className="text-[14px] text-gray-600 leading-5 font-Clash-Medium">
          Finish setting up your profile to unlock all features and start
          enjoying the full experience.
        </Text>
      </View>
    </ScrollView>
  );
}
