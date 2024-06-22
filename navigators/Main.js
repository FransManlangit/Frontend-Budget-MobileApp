import React, { useContext, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthGlobal from "../context/store/AuthGlobal";
import UserNavigator from "./UserNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../assets/common/baseUrl";
import { Image } from "react-native";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  DocumentPlusIcon,
  HomeIcon,
  Cog8ToothIcon,
  ShoppingBagIcon,
  BellIcon,
} from "react-native-heroicons/solid";


const Tab = createBottomTabNavigator();

const Main = () => {
 

  


  return (
    <Tab.Navigator
      initialRouteName="User"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#EBDE70",
      }}
    >
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <UserCircleIcon
                name="users"
                style={{ position: "relative" }}
                color={color}
                size={40}
              />
            );
          },
        }}
      />
     
    </Tab.Navigator>
  );
};

export default Main;
