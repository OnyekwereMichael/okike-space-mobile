import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "../components/CustomButton";
import { onboarding } from "../MockData/MockData";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  // Background colors per slide
  const backgroundColors = [
    "#D3FF66", 
    "#FDE0FF", 
    "#B296FE", 
  ];

  // Text colors per slide
  const textColors = [
    "#023327", 
    "#520061", 
    "#1C0067", 
  ];

  // Button background colors per slide
  const buttonBgColors = [
    "#023327", 
    "#520061", 
    "#1C0067", 
  ];

  return (
    <SafeAreaView
      style={{ backgroundColor: backgroundColors[activeIndex] }}
      className="flex-1"
    >
      {/* CONTENT */}
      <View className="flex-1 justify-between px-6 pt-6 pb-8">
        {/* SWIPER */}
        <Swiper
          ref={swiperRef}
          loop={false}
          showsButtons={false}
          onIndexChanged={(index) => setActiveIndex(index)}
          dot={
            <View className="w-[10px] h-[10px]  mx-1 bg-[#023327] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[10px] mx-1 bg-[#023327] rounded-full" />
          }
          paginationStyle={{top: 250 }}
        >
          {onboarding.map((item) => (
            <View key={item.id} className="items-center ">
              {/* IMAGE PLACEHOLDER */}
              <View className="w-full h-[347px] bg-[#E5E5E5] rounded-[16px]" />

              {/* TITLE */}
              <Text style={{ color: textColors[activeIndex] }} className="text-[32px] text-center mt-16 leading-tight  font-Clash-Bold w-[342px]">
                {item.title}
              </Text>

              {/* DESCRIPTION */}
              <Text style={{ color: textColors[activeIndex] }} className="text-[14px]  text-center mt-2 px-6 leading-relaxed font-Clash-Regular w-[342px]">
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>

        {/* BUTTONS */}
        <View className="gap-3">
          {/* MAIN BUTTON */}
          <CustomButton
            title={isLastSlide ? "Signup" : "Next"}
            onPress={() =>
              isLastSlide
                ? router.replace("/Signup")
                : swiperRef.current?.scrollBy(1)
            }
            bgColor={buttonBgColors[activeIndex]}
            className="rounded-[12px] mt-4"
          />

    <TouchableOpacity
  onPress={() =>
    isLastSlide ? router.replace("/Signin") : router.replace("/Signup")
  }
  className="w-full rounded-[12px] h-[60px] p-4 bg-white items-center justify-center mt-1"
>
  <Text
    style={{ color: textColors[activeIndex] }}
    className="text-[18px] font-Clash-Medium"
  >
    {isLastSlide ? "Login" : "Skip"}
  </Text>
</TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
