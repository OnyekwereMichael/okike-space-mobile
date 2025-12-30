import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  icon,
  rightIcon, // ✅ NEW
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  labelColor = "#93869C",
  ...props
}: InputFieldProps & { rightIcon?: any }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text
            style={{ color: labelColor }} 
          className={`text-[14px] font-Inter-Medium text-[#93869C] mb-2 ${labelStyle}`}>
            {label}
          </Text>

          <View className={`flex-row items-center bg-white border border-[#F0EEF1] rounded-[5px] ${containerStyle}`}>
            <TextInput
              className={`p-4 h-[44px] text-[12px] flex-1 font-Inter-Medium placeholder:text-[#200A31]  ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />

            {(rightIcon || icon) && (
              <Image
                source={rightIcon || icon}
                className={`w-6 h-6 mr-4 ${iconStyle}`}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
