import React from "react";
import { Text, ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className=" bg-white px-5 pt-10"
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-8">
        <Text className="text-[28px] font-Clash-Bold text-[#1C0067] mb-1">
          Welcome Home 👋
        </Text>
        <Text className="text-[15px] text-gray-500 font-Clash-Semibold">
          Let’s get things ready for you
        </Text>
      </View>

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
