import React from "react";
import {View, StyleSheet, Text} from "react-native";

const Tab3 =(props) => {
    return (
        <View style={styles.text}>
            <Text>Welcome to Tab3 Screen!!</Text>
        </View>
        );

};

const styles = StyleSheet.create({
    text: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default Tab3;
