import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-black">Hello World</Text>
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
