import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyNavigator from "./navigation/MyNavigator";

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return <MyNavigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});