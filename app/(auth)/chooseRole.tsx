import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import arrowBack from "../../assets/images/icon/arrowBack.png";
import { Image } from "expo-image";
import { images } from "@/constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function ChooseRole() {
  return (
    <SafeAreaView className="flex-1 bg-[#023327] px-5">
           <ScrollView
        
        showsVerticalScrollIndicator={false}
      >
     <TouchableOpacity className="my-10">
               <Image source={arrowBack} alt="Arrow Back" 
                 style={{ width: 28, height: 28 }}
               />
             </TouchableOpacity>

      <Text className="text-white font-Clash-Semibold text-[25px] mb-2">
        How will you use Okike?
      </Text>
      <Text className="text-[#EFF1F2B2] font-Poppins-Regular  text-[14px] leading-6 mb-8">
        Choose your primary goal. You can always change this later in settings.
      </Text>

 
      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-white rounded-[12px] p-6 mb-5 h-[217px] flex justify-between"
         onPress={() =>
              router.replace('/(auth)/HostspaceVerification/BecomeVerifiedHost')
            }
      >
        <View className="w-[50px] h-[50px]  items-center justify-center mb-4">
          <Image source={images.hostSpace} alt='hostapce'
            style={{ width: 50, height: 50 }}
          />
        </View>
<View className="space-y-4">
        <Text className="text-[#023327] text-[20px] font-Clash-Semibold mb-1">
          I want to Host Spaces
        </Text>
        <Text className="text-[#023327] text-[12px] font-Poppins-Regular mt-1">
          List your studio, event center, or room.
        </Text>
        </View>
      </TouchableOpacity>

      {/* Book Spaces Card */}
      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-[#4E6F65] rounded-[12px] p-6 h-[217px] border border-[#FFFFFF4D] flex justify-between"
         onPress={() =>
              router.replace('/(auth)/BookSpaceVerification/BecomeVerifiedBooker')
            }
      >
        <View className="w-[50px] h-[50px] rounded-lg bg-white items-center justify-center mb-4">
          <Image source={images.bookSpace} alt='hostapce'
            style={{ width: 50, height: 50 }}
          />
        </View>

<View>
        <Text className="text-[#fff] text-[20px] font-Clash-Semibold mb-1">
          I want to Book Spaces
        </Text>
        <Text className="text-[#fff] text-[12px] font-Inter-Regular mt-1">
          List your studio, event center, or room.
        </Text>
        </View>
      </TouchableOpacity>

      {/* Spacer */}
      <View className="flex-1" />

      {/* Continue Button */}
        <CustomButton
          title="Continue"
          className="rounded-[12px] my-10 text-[16px] bg-white text-[#2B2B2B]"
          textClassName="text-[#2B2B2B]"
           onPress={() =>
              router.replace('/HostspaceVerification/BecomeVerifiedHost')
            }
        />
        </ScrollView>
    </SafeAreaView>
  );
}
