import CustomButton from "@/app/components/CustomButton";
import { icons, images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { StepTracker } from "@/app/components/StepIndicator";
import { router } from "expo-router";
import SectionHeader from "@/app/components/SectionHeader";

export default function BecomeVerifiedHost() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                className="px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 160 }}
            >
                 <SectionHeader
          title=""
          subtitle=""
        />


                <View className="items-center mb-5">
                    <Image
                        source={images.hostSpace}
                        style={{ width: 80, height: 80 }}
                    />
                </View>


                <Text className="text-center text-[#023327] text-[26px] font-Clash-Semibold mb-1">
                    Become a Verified Host
                </Text>

                {/* Subtitle */}
                <Text className="text-center text-[#023327] text-[14px] leading-6 mb-10 font-Poppins-Regular">
                    We verify all hosts to ensure the safety
                    and{"\n"} quality of the Okike community.
                </Text>

                {/* Benefits */}
                <View className="space-y-4">
                    <BenefitItem text="Build trust with bookers" />
                    <BenefitItem text="Improve booking quality" />
                    <BenefitItem text="Ensure payment security" />
                </View>
            </ScrollView>

            {/* 🔒 FIXED BOTTOM SECTION */}
            <View className="px-5 pb-6 pt-4bg-white">
              

                <StepTracker totalSteps={5} currentStep={1} />

                <CustomButton
                    title="Start Verification"
                    className="bg-[#022C22] rounded-[14px] mt-6"
                    textClassName="text-white text-[16px]"
                    onPress={() =>
                        router.push('/(auth)/HostspaceVerification/CompanyInfo')
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const BenefitItem = ({ text }: { text: string }) => (
    <View className="flex-row items-center mx-20  mb-4">
        <View
            className="w-6 h-6 rounded-[6px] bg-[#023327] items-center justify-center mr-3"
            style={{
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 3,
            }}
        >
            <Ionicons name="checkmark" size={14} color="white" />
        </View>

        <Text className="text-[#023327] text-[16px] font-Clash-Medium">
            {text}
        </Text>
    </View>
);
