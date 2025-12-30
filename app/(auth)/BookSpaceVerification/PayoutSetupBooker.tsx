import {
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CustomButton from "@/app/components/CustomButton";
import  { StepTracker } from "@/app/components/StepIndicator";
import InputField from "@/app/components/InputField";
import SpaceCategoryDropdown from "@/app/components/SpaceCategoryDropDown";
import ImageUpload from "@/app/components/ImageUpload";
import { router } from "expo-router";
import SectionHeader from "@/app/components/SectionHeader";

export default function PayoutSetupBooker() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* CONTENT */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
             <SectionHeader
  title="Payout Setup"
  subtitle="Where should we send your earnings?"
    titleColor="#1C0067"
subtitleColor="#1C0067" 

/>

       
        <View>
           <InputField
            label="Card Number"
            placeholder="4657 8324 7453 9302"
            labelColor="#1C0067"
            value=""
          />
        </View>

        {/* State & City */}
        <View className="flex-row space-x-3 gap-2">
          <View className="flex-1">
            <InputField
            label="First Name"
            placeholder="Enter first name"
            value=""
           labelColor="#1C0067"
          />
          </View>

          <View className="flex-1">
             <InputField
            label="Last Name"
            placeholder="Enter last name"
            
            value=""
            labelColor="#1C0067"
          />
          </View>
        </View>

       <View className="flex-row space-x-3 gap-2">
          <View className="flex-1">
            <InputField
            label="Expiration month"
            placeholder="eg. 09"
            value=""
            labelColor="#1C0067"
          />
          </View>

          <View className="flex-1">
             <InputField
            label="Expiration year"
            placeholder="eg. 2025"
            
            value=""
            labelColor="#1C0067"
          />
          </View>
        </View>


<View className="flex-row space-x-3 gap-2">
          <View className="flex-1">
            <InputField
            label="CVV"
            placeholder="eg. 234"
            value=""
            labelColor="#1C0067"
          />
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 ">
   

        <View className="items-center mb-4">
           <StepTracker totalSteps={5} currentStep={4}  textColor="#1C0067"
            activeColor="#1C0067"
            inactiveColor="#DFD6F4"/>
        </View>

        <CustomButton
          title="Add Card"
          className="bg-[#1C0067] rounded-[14px]"
          textClassName="text-white text-[16px]"
           onPress={() =>
              router.replace('/(auth)/BookSpaceVerification/IdentityCheckBooker')
            }
        />
      </View>
    </SafeAreaView>
  );
}

