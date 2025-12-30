import { icons } from "@/constants";
import { Image as ExpoImage } from "expo-image";
import { Image, Text, TouchableOpacity, View } from "react-native";

type OAuthProps = {
  title?: string;
  onPress?: () => void;
};


const IAuth = ({
  title = "Sign Up with Google",
  onPress,
}: OAuthProps) => {
  const handleGoogleSignIn = async () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <View>
      {/* Divider */}
      <View className="flex-row items-center justify-center gap-x-3 mb-5">
        {/* <View className="flex-1 h-px bg-[#F0EEF1]" />
        <View className="flex-1 h-px bg-[#F0EEF1]" /> */}
      </View>

      {/* Google Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleGoogleSignIn}
        className="w-full h-[60px] border border-[#F0EEF1] rounded-[5px] flex-row items-center justify-center mb-6"
      >
         <Image source={icons.apple} alt='' className="mr-4"/>

        <Text className="text-[16px] font-Clash-Medium text-[#000000]">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IAuth;
