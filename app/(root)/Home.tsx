import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-5 py-8">
      <Text className="text-2xl font-bold text-purple-900 mb-6">
        Welcome Home
      </Text>

    </ScrollView>
  );
}
