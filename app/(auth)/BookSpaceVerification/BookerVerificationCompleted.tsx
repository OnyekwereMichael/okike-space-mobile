import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '@/constants';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import CustomButton from '@/app/components/CustomButton';

export default function BookerVerificationCompleted() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-5">
     <View className="w-20 h-20 mb-8">
 <View className="bg-[#B296FE] w-[80px] h-[80px] rounded-[8px] items-center justify-center mb-6">
        <Ionicons name="checkmark" size={50} color="#FFFFFF" />
      </View>
</View>


      {/* Heading */}
      <Text className="text-[#1C0067] text-[26px] font-Clash-Bold text-center mb-2 ">
        You're All Set!
      </Text>

      {/* Description */}
      <Text className="text-[#1C0067] text-[14px] text-center mb-10 px-2 font-Poppins-Regular">
       Your booker profile is verified. Go find your next creative space.
      </Text>

      {/* Button */}
      {/* <TouchableOpacity
        className="bg-[#023327] py-4 px-6 rounded-xl w-full absolute bottom-10 items-center"
        onPress={() => navigation.navigate('CreateListing')}
      >
        <Text className="text-white text-[16px] font-semibold">
          Create Your First Listing
        </Text>
      </TouchableOpacity> */}

      <CustomButton
          title="Start Exploring Spaces"
          className="bg-[#1C0067] rounded-[14px] w-full absolute bottom-10"
          textClassName="text-white text-[16px]"
           onPress={() =>
              router.replace('/(root)/Home')
            }
        />
    </View>
  );
}
