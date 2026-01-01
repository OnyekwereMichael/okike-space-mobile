import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import SectionHeader from "@/app/components/SectionHeader";
import { icons } from "@/constants";
import { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import CustomButton from "@/app/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

export default function IdentityCheckBooker() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [cameraRef, setCameraRef] = useState<any>(null);
  const [selfieUri, setSelfieUri] = useState<string | null>(null);

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-[#F8F9FA] px-6">
        <View className="mb-6 bg-[#E0E0E0] w-24 h-24 rounded-full justify-center items-center">
          <Ionicons name="camera-outline" size={48} color="#1C0067" />
        </View>
  
        {/* Heading */}
        <Text className="text-2xl font-Clash-Bold text-[#1C0067] text-center mb-2">
          Camera Permission Required
        </Text>
  
        {/* Subtitle */}
        <Text className="text-center text-gray-600 font-Poppins-Regular text-base leading-6 mb-6">
          To continue, we need access to your camera to take a selfie and verify your identity.
        </Text>
  
        {/* Grant Permission Button */}
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-[#1C0067] px-8 py-3 rounded-full shadow-md"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
        >
          <Text className="text-white  font-Clash-Semibold text-lg text-center">
            Grant Permission
          </Text>
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
      {/* Top Overlay */}
      <View className="absolute top-0 left-0 right-0 bg-black bg-opacity-40 p-4 flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => setShowCamera(false)}
          className="p-2"
        >
          <Text className="text-red-600 font-Poppins-Regular text-lg">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-white font-Poppins-Regular text-lg ">Align your face inside the frame</Text>
        <View className="w-12" /> 
      </View>

   
      <View className="flex-1 justify-center items-center">
        <View
          style={{
            width: 300, 
            height: 300,
            borderRadius: 150, 
            borderWidth: 4, 
            borderColor: "rgba(255,255,255,0.7)",
            borderStyle: "dashed",
          }}
        />
      </View>

     
      <View className="absolute bottom-12 w-full flex-row justify-center items-center">
        <TouchableOpacity
          onPress={async () => {
            const photo = await cameraRef.takePictureAsync();
            setSelfieUri(photo.uri);
            setShowCamera(false);
          }}
          className="w-20 h-20 rounded-full bg-white justify-center items-center shadow-lg"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}
        >
          <View
            className="w-16 h-16 rounded-full border-4 border-[#1C0067]"
          />
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <SectionHeader
        title="Identity Check"
        subtitle="Just a quick check to make sure it’s really you."
        titleColor="#1C0067"
        subtitleColor="#1C0067"
      />

      {/* Selfie Card */}
      <View className="border border-[#F0EEF1] rounded-[12px] h-[184px] p-5 flex justify-center items-center">
        {selfieUri ? (
          <Image
            source={{ uri: selfieUri }}
            className="w-full h-full rounded-[10px]"
            resizeMode="cover"
          />
        ) : (
          <>
            <View className="flex-row items-center gap-4 w-full">
              <View>
                <Image source={icons.cameraBookerIcon} alt="camera Icon" />
              </View>

              <View>
                <Text className="text-[20px] font-Clash-Bold text-[#1C0067]">
                  Selfie Check
                </Text>
                <Text className="text-[#1C0067] font-Poppins-Regular text-[12px] mt-1">
                  Take a photo to match your ID
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setShowCamera(true)}
              className="border-[0.5px] border-[#727272] rounded-[12px] h-[54px] py-3 mt-6 items-center justify-center w-full"
            >
              <Text className="font-semibold text-[#1C0067] text-[18px] font-Clash-Semibold">
                Take Selfie
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Footer */}
      <View className="absolute bottom-10 left-6 right-6">
        <View className="items-center mb-2">
          <StepTracker
            totalSteps={5}
            currentStep={5}
            textColor="#1C0067"
            activeColor="#1C0067"
            inactiveColor="#DFD6F4"
          />
        </View>

        <CustomButton
          title="Next Step"
          className="bg-[#1C0067] rounded-[14px] mt-3"
          textClassName="text-white text-[16px]"
          onPress={() =>
            router.push(
              "/(auth)/BookSpaceVerification/BookerVerificationCompleted"
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}
