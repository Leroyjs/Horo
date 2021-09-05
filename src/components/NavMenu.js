import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import NavigationService from "../NavigationService";

import { CircleButtonTransparent } from "./UI/CircleButtonTransparent";

const profile = require("../../assets/componentImages/profile.png");
const menu = require("../../assets/componentImages/menu.png");

export const NavMenu = ({}) => {
  const account = useSelector((state) => state.account);
  return (
    <View style={styles.navMenu}>
      <CircleButtonTransparent
        pressHandler={() => NavigationService.navigate("Menu")}
        img={menu}
      ></CircleButtonTransparent>
      <CircleButtonTransparent
        pressHandler={() => NavigationService.navigate("Main")}
        img={account.zodiac.img}
      ></CircleButtonTransparent>
      <CircleButtonTransparent
        pressHandler={() => NavigationService.navigate("Friends")}
        img={profile}
      ></CircleButtonTransparent>
    </View>
  );
};

const styles = StyleSheet.create({
  navMenu: {
    minHeight: 80,
    backgroundColor: "#31426E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
