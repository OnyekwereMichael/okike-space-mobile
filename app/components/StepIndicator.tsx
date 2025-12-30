import React from "react";
import { View, Text } from "react-native";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number; // 1-based index
  activeColor?: string;
  inactiveColor?: string;
}

const StepIndicator = ({
  totalSteps,
  currentStep,
  activeColor = "#023327",
  inactiveColor = "#D7EFE9",
}: StepIndicatorProps) => {
  return (
    <View className="w-full flex-row justify-center gap-1">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index + 1 <= currentStep;

        return (
          <View
            key={index}
            className="w-[55px] h-[6px] rounded-[8px]"
            style={{
              backgroundColor: isActive ? activeColor : inactiveColor,
            }}
          />
        );
      })}
    </View>
  );
};

interface StepTrackerProps {
  totalSteps: number;
  currentStep: number;
  textColor?: string;
  activeColor?: string;
  inactiveColor?: string;
}

export const StepTracker = ({
  totalSteps,
  currentStep,
  textColor = "#023327",
  activeColor,
  inactiveColor,
}: StepTrackerProps) => {
  return (
    <View className="mb-4">
      <Text
        className="text-center text-[16px] font-Clash-Semibold mb-3"
        style={{ color: textColor }}
      >
        Step {currentStep}/{totalSteps}
      </Text>

      {/* Progress bar */}
      <StepIndicator
        totalSteps={totalSteps}
        currentStep={currentStep}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
    </View>
  );
};
