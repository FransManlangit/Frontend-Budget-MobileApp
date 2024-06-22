import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Start({ navigation }) {
  return (
    <SafeAreaView>
    <KeyboardAwareScrollView>
      <View>
        <StatusBar style="light" />
       
        <View className=" h-screen w-screen flex justify-around">
          <View className="flex pt-56">
          <Text className="flex italic text-center text-[#2E1C1A] text-4xl font-extrabold">Welcome Students</Text>
          <Text className="tracking-tighter italic text-center text-[#2E1C1A] text-sm font-semibold">Committed to Academic & Character Excellence.</Text>
          </View>
          <View className="px-8">
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              className="rounded-full bg-[#87633A] mt-6  p-4 flex items-center justify-center"
            >
              <Text className="text-white font-semibold ">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Guest")}
              className="rounded-full bg-[#87633A] mt-6  p-4 flex items-center justify-center"
            >
              <Text className="text-white font-semibold ">
              Guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
