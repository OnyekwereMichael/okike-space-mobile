import React from "react";
import { View, Text } from "react-native";
import BackButton from "./BackButton";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  titleColor = "#023327",
  subtitleColor = "#6B8F86",
}: SectionHeaderProps) => {
  return (
    <View style={{ marginBottom: 6 }}>
                <BackButton tintColor="#000" fallbackRoute="/Signup" />

      <Text
        style={{
          color: titleColor,
        }}
        className='text-[22px] font-Clash-Bold mb-1'
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            color: subtitleColor,
          }}
          className='text-[14px] font-Inter-Medium mb-6'
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default SectionHeader;
