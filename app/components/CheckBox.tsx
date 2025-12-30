import { Pressable, View, Text } from "react-native";
import { useState } from "react";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

const Checkbox = ({
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    const value = !isChecked;
    setIsChecked(value);
    onChange?.(value);
  };

  return (
    <Pressable
      onPress={toggle}
      className="flex-row items-center gap-3"
    >
      <View
        className={`w-5 h-5 rounded-md border-2 items-center justify-center
          ${isChecked ? "bg-[#023327] border-[#023327]" : "border-gray-400"}
        `}
      >
        {isChecked && (
          <View className="w-2.5 h-2.5 bg-white rounded-sm" />
        )}
      </View>

      {label && (
        <Text className="text-[12px] text-[#023327] font-Inter-Regular">
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Checkbox;
