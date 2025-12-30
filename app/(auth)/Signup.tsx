import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import CustomButton from "../components/CustomButton";
import arrowBack from "../../assets/images/icon/arrowBack.png";
import InputField from "../components/InputField";
import { icons } from "@/constants";
import OAuth from "../components/OAuth";
import IAuth from "../components/IAuth";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#043A2B]">
      {/* HEADER */}
      <View className="px-5 pt-6 pb-8">
        <TouchableOpacity className="mb-12">
          <Image source={arrowBack} alt="Arrow Back" />
        </TouchableOpacity>

        <Text className="text-[25px] mb-2 text-white font-Clash-Bold">
          Create an account
        </Text>
        <Text className="text-[13px] font-Clash-Regular text-[#EFF1F2B2]">
          Join Okike to start booking or hosting spaces.
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 30,
          flexGrow: 1,
        }}
        className="bg-white rounded-t-3xl px-5 pt-6"
      >
        {/* INPUTS */}
        <View className="space-y-4">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.userIcon}
            value=""
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.mailIcon}
            value=""
          />

          <InputField
            label="Set Password"
            placeholder="********************"
            icon={icons.eyeOff}
            value=""
          />

          <InputField
            label="Confirm Password"
            placeholder="********************"
            icon={icons.eyeOff}
            value=""
          />
        </View>

        {/* CREATE BUTTON */}
        <CustomButton
          title="Create Account"
          className="rounded-[12px] mt-4 text-[16px]"

        />

        {/* LOGIN */}
        <Text className="text-center font-Inter-Medium text-[14px] text-[#93869C] mt-5">
          Already have an account?{" "}
            <TouchableOpacity onPress={() => router.replace("/Signin")}>
    <Text className="text-[#023327] font-bold underline">
      Login
    </Text>
  </TouchableOpacity>
        </Text>

        {/* DIVIDER */}
        <View className="flex-row items-center justify-center my-8">
          <View className="flex-1 h-px bg-[#F0EEF1]" />
          <Text className="mx-2 text-[12px] text-[#2F2636] font-Inter-Regular">
            or register with
          </Text>
          <View className="flex-1 h-px bg-[#F0EEF1]" />
        </View>

      
        <View className="space-y-4">
         <OAuth title="Sign up with Google" />
         <IAuth title="Sign up with Apple"/>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
