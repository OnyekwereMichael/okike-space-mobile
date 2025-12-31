import CustomButton from "@/app/components/CustomButton";
import ImageUpload from "@/app/components/ImageUpload";
import SectionHeader from "@/app/components/SectionHeader";
import { StepTracker } from "@/app/components/StepIndicator";
import { icons } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function SpaceVerification() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <SectionHeader
        title="Space Verification"
        subtitle="Show us proof of ownership or management."
      />

      {/* Selfie Card */}
      <View className="border border-[#F0EEF1] rounded-[12px] h-[184px] p-5 flex justify-center items-center ">
        <View className="flex-row items-center gap-4 w-full">
          <View className="">
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                className="w-16 h-16 rounded-lg"
                resizeMode="cover"
              />
            ) : (
              <Image source={icons.cameraIcon} alt="camera Icon" />
            )}
          </View>

          <View className="">
            <Text className="text-[20px] font-Clash-Bold text-[#023327]">
              Space Photos
            </Text>
            <Text className="text-[#023327] font-Poppins-Regular text-[12px] mt-1">
              Upload 2-3 photos of the space
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={pickImage}
          className="border-[0.5px] border-[#727272] rounded-[12px] h-[54px] py-3 mt-6 items-center justify-center w-full"
        >
          <Text className="font-semibold text-[#023327] text-[18px] font-Clash-Semibold justify-center">
            Upload Photo
          </Text>
        </TouchableOpacity>
      </View>


    <ImageUpload
  label="Proof of Ownership/CAC"
  onChange={(uri) => console.log("Uploaded image:", uri)}
/>
      {/* Footer */}
      <View className="absolute bottom-10 left-6 right-6">
        <View className="items-center mb-4">
          <StepTracker totalSteps={5} currentStep={4} />
        </View>

        <CustomButton
          title="Next Step"
          className="bg-[#022C22] rounded-[14px]"
          textClassName="text-white text-[16px]"
          onPress={() =>
            router.push("/(auth)/HostspaceVerification/PayoutSetup")
          }
        />
      </View>
    </SafeAreaView>
  );
}
