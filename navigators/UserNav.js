import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screens/user/start";
import Login from "../screens/user/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../assets/common/baseUrl";
import AuthGlobal from "../context/store/AuthGlobal";

const Stack = createStackNavigator();

const UserNavigator = (props) => {
 

  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
