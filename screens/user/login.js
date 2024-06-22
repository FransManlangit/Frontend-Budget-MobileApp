import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useContext, useEffect } from "react";
  import AuthGlobal from "../../context/store/AuthGlobal";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { loginUser } from "../../context/actions/Auth.actions";
  import { useNavigation } from "@react-navigation/native";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { ArrowLeftIcon } from "react-native-heroicons/solid";
 
  
  const Login = (props) => {
    const context = useContext(AuthGlobal);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const navigation = useNavigation();
  
    const validateForm = () => {
      let errors = {};
      if (!email) errors.email = "Email is Required";
      if (!password) errors.password = "Password is Required";
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleForgotPass = () => {
      navigation.navigate("ForgotPassword");
    };
  
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const login = () => {
      if (!validateForm()) {
        return;
      }
      const user = {
        email,
        password,
      };
  
      if (email === "" || password === "") {
        setErrors("Please fill in your credentials");
      } else {
        loginUser(user, context.dispatch);
        console.log("error");
      }
    };
  
    useEffect(() => {
      if (context.stateUser.isAuthenticated === true) {
        // Navigate based on user role after successful login
        switch (context.stateUser.user.role) {
          case "guidance":
            navigation.navigate("GuidanceProfile");
            break;
          case "cashier":
            navigation.navigate("CashierProfile");
            break;
          default:
            navigation.navigate("User Profile");
            break;
        }
      }
    }, [context.stateUser.isAuthenticated]);
  
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });
  
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <View className="flex-1 bg-[#B1A079]">
            <View className="pt-4">
              <View className="flex-row justify-start">
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="bg-[#FAE500] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                >
                  <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-center pb-4">
                {/* <Image
                  source={require("../../assets/new-logo.png")}
                  style={{ width: 190, height: 190 }}
                /> */}
              </View>
            </View>
            <View
              style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
              className="flex-1 bg-white px-8 pt-8"
            >
              <View className="space-y-4">
                <View className="flex ">
                  <Text className="text-base pb-4 font-semibold">
                    Email Address
                  </Text>
                  <TextInput
                    placeholder="Enter your Email"
                    className="rounded-full bg-neutral-100 h-14 pl-4"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  {errors.email ? (
                    <Text className="text-red-400 pl-2 pt-2">{errors.email}</Text>
                  ) : null}
                </View>
             
                <TouchableOpacity
                  onPress={() => handleForgotPass()}
                  className="flex items-end"
                >
                  <Text className="text-gray-700 mb-5">Forgot Password?</Text>
                </TouchableOpacity>
                <View className="p-4 pt-10">
              
                <TouchableOpacity
                  onPress={() => login()}
                  className="py-3 bg-[#FAE500] rounded-xl"
                >
                  <Text className="text-base font-semibold text-center text-gray-700">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
             
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  };
  

  
  export default Login;
  