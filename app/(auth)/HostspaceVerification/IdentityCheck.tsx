import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SectionHeader from "@/app/components/SectionHeader";
import { icons, images } from "@/constants";
import  { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import CustomButton from "@/app/components/CustomButton";

export default function IdentityCheck() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [cameraRef, setCameraRef] = useState<any>(null);

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
        <Text className="text-lg text-center mb-4">
          Camera access is required to take a selfie.
        </Text>

        <TouchableOpacity
          onPress={requestPermission}
          className="bg-[#023327] px-6 py-3 rounded-full"
        >
          <Text className="text-white font-semibold">Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }


  if (showCamera) {
    return (
      <CameraView
        ref={(ref) => setCameraRef(ref)}
        facing="front"
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-end pb-12 items-center">
          <TouchableOpacity
            onPress={async () => {
              const photo = await cameraRef.takePictureAsync();
              console.log("Selfie taken:", photo);
              setShowCamera(false);
            }}
            className="w-20 h-20 rounded-full bg-white"
          />
        </View>
      </CameraView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
     <SectionHeader
  title="Identity Check"
  subtitle="We need to confirm it's really you."

/>


      {/* Selfie Card */}
      <View className="border border-[#F0EEF1] rounded-[12px] h-[184px] p-5 flex justify-center items-center ">
        <View className="flex-row items-center gap-4 w-full">
          <View className="">
            <Image source={icons.cameraIcon} alt='camera Icon'/>
          </View>

          <View className="">
            <Text className="text-[20px] font-Clash-Bold text-[#023327]">Selfie Check</Text>
            <Text className="text-[#023327] font-Poppins-Regular text-[12px] mt-1 ">
              Take a photo to match your ID
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setShowCamera(true)}
          className="border-[0.5px] border-[#727272] rounded-[12px] h-[54px] py-3 mt-6 items-center justify-center w-full"
        >
          <Text className="font-semibold text-[#023327] text-[18px] font-Clash-Semibold justify-center">
            Take Selfie
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="absolute bottom-10 left-6 right-6">

        {/* Progress Bar */}
        <View className="items-center mb-4">
          <StepTracker totalSteps={5} currentStep={3} />
        </View>

       <CustomButton
          title="Next Step"
          className="bg-[#022C22] rounded-[14px]"
          textClassName="text-white text-[16px]"
           onPress={() =>
              router.replace('/(auth)/HostspaceVerification/SpaceVerification')
            }
        />
      </View>
    </SafeAreaView>
  );
}
