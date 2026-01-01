import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const options = [
  "Photography Studio",
  "Music Studio",
  "Event Space",
  "Co-working Space",
];

export default function SpaceCategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Photography Studio");

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <View className="w-full mt-3">
      {/* Label */}
      <Text className="text-[14px] font-Poppins-Regular text-[#023327] mb-3">
        Space Category
      </Text>

      {/* Selected box */}
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
        className="flex-row items-center justify-between bg-white border border-[#F0EEF1] rounded-[5px] px-4 h-[48px]"
      >
        <Text className="text-[12px] text-[#023327] font-Poppins-Regular">
          {selected}
        </Text>

        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={18}
          color="#6B8F86"
        />
      </TouchableOpacity>

      {/* Dropdown list */}
      {isOpen && (
        <View className="mt-2 bg-white border border-[#F0EEF1] rounded-[5px] overflow-hidden ">
          {options.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
              className="px-4 py-3 border-b border-[#F0EEF1] "
            >
              <Text
                className={`text-[14px]  ${
                  selected === item
                    ? "text-[#023327] font-semibold"
                    : "text-[#6B8F86]"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
