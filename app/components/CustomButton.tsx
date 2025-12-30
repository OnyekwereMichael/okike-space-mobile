import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-600";
    case "outline":
      return "bg-white border border-[#0B2F24]";
    default:
      return "bg-[#023327]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  textClassName,
  bgColor,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={`
        w-full
        h-[60px]
        rounded-xl
        flex-row
        items-center
        justify-center
        ${bgColor ? "" : getBgVariantStyle(bgVariant)}
        ${className}
      `}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      {...props}
    >
      {IconLeft && <IconLeft />}

      <Text
        className={`
          text-[18px]
          font-Clash-Medium
          ${
            textClassName
              ? textClassName
              : getTextVariantStyle(textVariant)
          }
        `}
      >
        {title}
      </Text>

      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
