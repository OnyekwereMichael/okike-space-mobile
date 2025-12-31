import CustomButton from "@/app/components/CustomButton";
import SectionHeader from "@/app/components/SectionHeader";
import { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneAuthScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpStr = otp.join("");
    if (otpStr.length < 4 || !/^\d{4}$/.test(otpStr)) {
      Alert.alert("Invalid OTP", "Please enter a 4-digit OTP");
      return;
    }
    Alert.alert("OTP Verified", `You entered: ${otpStr}`);
  };

  return (
    <View className="flex-1 bg-white px-5 ">
       <SectionHeader
          title="Phone Authentication"
          subtitle="Enter OTP to verify"
          titleColor="#1C0067"
          subtitleColor="#1C0067" 

        />

    
      <View className="flex-row justify-between mb-4 mt-1">
        {otp.map((value, i) => (
          <TextInput
            key={i}
            ref={(ref) => (inputRefs.current[i] = ref)}
            className="border border-[#C0C0C0] w-[70px] h-[70px] text-center rounded-[14px] text-lg"
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
          />
        ))}
      </View>

      <Text className="text-center text-[#7E7E7E] text-[14px] leading-[18px] font-Inter-Regular mb-2">
        Enter the verification code sent to your number
      </Text>

      <View className="flex-row justify-center mb-8">
        <Text className="text-[#2B2B2B] text-[14px] font-Inter-Regular">Didn&apos;t receive OTP? </Text>
        <TouchableOpacity>
          <Text className="text-[#1C0067] font-Inter-Medium text-[14px]">Resend OTP</Text>
        </TouchableOpacity>
      </View>

        <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 ">
<View className="mb-1">
          <StepTracker totalSteps={5} currentStep={2}  textColor="#1C0067"
  activeColor="#1C0067"
  inactiveColor="#DFD6F4"/>
  </View>

         <CustomButton
          title="Verify Code"
          className="bg-[#1C0067] rounded-[14px]"
          textClassName="text-white text-[16px]"
          onPress={() =>
            router.push('/(auth)/BookSpaceVerification/PayoutSetupBooker')
          }
        />
        </View>
    </View>
  );
}
