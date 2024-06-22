import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Start({ navigation }) {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/Logo.png")}
            />
            <Text style={styles.title}>
              Managing your money is about to get a lot better
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    // Add your logo styles here if needed
  },
  title: {
    fontSize: 36, 
    color: '#676700',
    textAlign: 'left', 
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
    lineHeight: 42, 
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#676700',
    borderRadius: 50,
    alignItems: 'center',
    padding: 16,
    width: 256,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
