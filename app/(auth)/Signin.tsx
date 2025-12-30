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
import Checkbox from "../components/CheckBox";
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

const validateEmail = (value: string) => {
  setEmail(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setIsEmailValid(emailRegex.test(value));
};
  return (
    <View className="flex-1 bg-[#043A2B]">
      {/* HEADER */}
      <View className="px-5 pt-6 pb-8">
        <TouchableOpacity className="mb-36">
          <Image source={arrowBack} alt="Arrow Back" />
        </TouchableOpacity>

        <Text className="text-[25px] mb-2 text-white font-Clash-Bold">
          Welcome back!
        </Text>
        <Text className="text-[13px] font-Clash-Regular text-[#EFF1F2B2]">
          Enter your details to login.
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
            label="Email"
            placeholder="Enter your email"
            icon={icons.mailIcon}
            value=""
              rightIcon={
    email.length === 0
      ? icons.mailIcon
      : isEmailValid
      ? icons.checkmark  
      : icons.cancelIcon 
  }
          />

          <InputField
            label="Password"
            placeholder="********************"
            icon={icons.eyeOff}
            value=""
          />
        </View>

       <View className="mt-4 flex-row items-center justify-between">
  <Checkbox
    label="Remember me"
    onChange={(value) => console.log("Checked:", value)}
  />

  <Text className="text-[12px] font-Inter-Regular underline text-[#023327] font-semibold">
    Forgot Password?
  </Text>
</View>

        <CustomButton
          title="Login"
          className="rounded-[12px] mt-4 text-[16px]"
           onPress={() =>
              router.replace('/chooseRole')
            }
        />

        {/* LOGIN */}
        <Text className="text-center font-Inter-Medium text-[14px] text-[#93869C] mt-5">
          Dont have an account?{" "}
           <TouchableOpacity onPress={() => router.replace("/Signup")}>
            <Text className="text-[#023327] font-bold underline">
              Signup
            </Text>
          </TouchableOpacity>
        </Text>

        {/* DIVIDER */}
        <View className="flex-row items-center justify-center my-6">
          <View className="flex-1 h-px bg-[#F0EEF1]" />
          <Text className="mx-2 text-[12px] text-[#2F2636] font-Inter-Regular">
            or login with
          </Text>
          <View className="flex-1 h-px bg-[#F0EEF1]" />
        </View>
      
        <View className="space-y-3">
         <OAuth title="Sign in with Google" />
         <IAuth title="Sign in with Apple"/>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
