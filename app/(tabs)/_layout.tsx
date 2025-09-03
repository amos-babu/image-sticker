import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? "home-sharp" : "home-outline"}
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: (props) => (
            <Ionicons
              name={
                props.focused
                  ? "information-circle"
                  : "information-circle-outline"
              }
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
