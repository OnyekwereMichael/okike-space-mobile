import CustomButton from "@/app/components/CustomButton";
import ImageUpload from "@/app/components/ImageUpload";
import InputField from "@/app/components/InputField";
import SectionHeader from "@/app/components/SectionHeader";
import SpaceCategoryDropdown from "@/app/components/SpaceCategoryDropDown";
import { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function CompanyInfo() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* CONTENT */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        <SectionHeader
          title="Company Information"
          subtitle="We need to confirm it's really you."
        />


        <View>
          <InputField
            label="Company Name"
            placeholder="Okike Studios Ltd."
            labelColor="#023327"
            value=""
          />
        </View>

        {/* State & City */}
        <View className="flex-row space-x-3 gap-2">
          <View className="flex-1">
            <InputField
              label="State"
              placeholder="Tamilnadu"
              value=""
              labelColor="#023327"
            />
          </View>

          <View className="flex-1">
            <InputField
              label="City"
              placeholder="Chennai"

              value=""
              labelColor="#023327"
            />
          </View>
        </View>

        {/* Address */}
        <View>
          <InputField
            label="Full Address"
            placeholder="Tamilnadu"
            value=""
            labelColor="#023327"

          />
        </View>


        <SpaceCategoryDropdown />

        <ImageUpload
          label="Upload a Logo"
          onChange={(uri) => console.log("Uploaded image:", uri)}
        />

      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 ">


        <View className="items-center mb-4">
          <StepTracker totalSteps={5} currentStep={2} />
        </View>

        <CustomButton
          title="Next Step"
          className="bg-[#022C22] rounded-[14px]"
          textClassName="text-white text-[16px]"
          onPress={() =>
            router.push('/(auth)/HostspaceVerification/IdentityCheck')
          }
        />
      </View>
    </SafeAreaView>
  );
}

