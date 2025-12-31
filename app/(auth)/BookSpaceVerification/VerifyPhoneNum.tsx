import CustomButton from "@/app/components/CustomButton";
import InputField from "@/app/components/InputField";
import SectionHeader from "@/app/components/SectionHeader";
import { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    View,
} from "react-native";

export default function VerifyPhoneNum() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* CONTENT */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        <SectionHeader
          title="Verify Phone"
          subtitle="We'll send a code to confirm your number."
          titleColor="#1C0067"
          subtitleColor="#1C0067" 

        />


        <View>
          <InputField
            label="Phone Number"
            placeholder="+234  823 000 4832"
            labelColor="#1C0067"
            value=""
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 ">

 <View className="mb-1">
          <StepTracker totalSteps={5} currentStep={2}  textColor="#1C0067"
  activeColor="#1C0067"
  inactiveColor="#DFD6F4"/>
  </View>

        <CustomButton
          title="Next Step"
          className="bg-[#1C0067] rounded-[14px]"
          textClassName="text-white text-[16px]"
          onPress={() =>
            router.push('/(auth)/BookSpaceVerification/VerifyOtp')
          }
        />
      </View>
    </SafeAreaView>
  );
}

