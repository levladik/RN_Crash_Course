import React from "react";
import { View, Image, Text } from "react-native";
import { router } from "expo-router";
import CustomButton from "./CustomButton";

import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        className="w-[270px] h-[215px]"
        source={images.empty}
        resizeMode="contain"
      />

      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => {
          router.push("/create");
        }}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
