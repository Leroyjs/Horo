import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { NavMenu } from "./NavMenu";
import { AppNavigation } from "./AppNavigation";

import NavigationService from "../NavigationService";
import { Reg } from "../components/Reg.js";

import { useSelector, useDispatch } from "react-redux";
import { registration } from "../redux/actions/account";

export const Main = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const newUserRegistration = (data) => {
    dispatch(registration(data));
  };

  return account ? (
    <View style={styles.wrapper}>
      <AppNavigation
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      ></AppNavigation>
      <NavMenu></NavMenu>
    </View>
  ) : (
    <Reg newUserRegistration={newUserRegistration}></Reg>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#31426E",
  },
});
