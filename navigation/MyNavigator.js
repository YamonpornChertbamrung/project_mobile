import React from "react";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import screen ที่เกี่ยวข้อง

import tab1 from "../screens/tab1";
import tab2 from "../screens/tab2";
import tab3 from "../screens/tab3";
import tab4 from "../screens/tab4";

// สร้าง navigator ตามโจทย์กำหนด
const Tab = createBottomTabNavigator();
const MealsNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();





// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
       <Tab.Navigator initialRouteName="หน้าหลัก">
      <Tab.Screen name="หน้าหลัก" component={tab1}
      options={{
        tabBarIcon: () => {
          return <Ionicons name="home-outline" size={24} color="black" />
        },
        headerShown : false,
      }}/>
      <Tab.Screen name="คำนวณแคล" component={tab2}
      options={{
        tabBarIcon: () => {
          return <Ionicons name="calculator-outline" size={24} color="black" />
        },
        headerShown : false,
      }}/>
      <Tab.Screen name="ออกกำลังกาย" component={tab3}
      options={{
        tabBarIcon: () => {
          return <Ionicons name="barbell-outline" size={24} color="black" />
        },
        headerShown : false,
      }}/>
      <Tab.Screen name="บล็อก" component={tab4}
      options={{
        tabBarIcon: () => {
          return <Ionicons name="newspaper-outline" size={24} color="black" />
        },
        headerShown : false,
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
