import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

interface ImageUploadProps {
  label?: string;
  placeholder?: string;
  height?: number;
  onChange?: (uri: string) => void;
}


const ImageUpload = ({
  label = "Upload Image",
  placeholder = "Upload Image (Optional)",
  height = 120,
  onChange,
}: ImageUploadProps) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      onChange?.(uri);
    }
  };

  return (
    <View className="mb-6 mt-5">
      {label && (
        <Text className="text-[#023327] text-[14px] font-Poppins-Regular mb-3">
          {label}
        </Text>
      )}

      <TouchableOpacity
        onPress={pickImage}
        activeOpacity={0.8}
        className="rounded-[12px] border border-[#E5EDEA] items-center justify-center overflow-hidden"
        style={{ height }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <>
            <Ionicons name="share-outline" size={22} color="#6B8F86" />
            <Text className="text-[#9CB7AF] font-Poppins-Regular text-[13px] mt-2">
              {placeholder}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;
