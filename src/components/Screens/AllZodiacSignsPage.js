import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { Header } from "../Header";
import { ZodiacSignList } from "../ZodiacSignList";
import { useSelector, useDispatch } from "react-redux";
import { zodiacs } from "../../zodiac";
import { setActiveZodiac } from "../../redux/actions/config";

export const AllZodiacSignsPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const goToZodiacSign = (index) => {
    dispatch(setActiveZodiac(zodiacs[index]));
    navigation.navigate("SelectedZodiacSign");
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewInner}>
        <Header navigation={navigation} arrow={true}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Все знаки</Text>
          </View>
        </Header>
        <ZodiacSignList
          changeActiveZodiac={goToZodiacSign}
          zodiacSignList={zodiacs}
        ></ZodiacSignList>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#31426E",
  },
  scrollViewInner: {
    paddingHorizontal: 20,
    paddingVertical: 46,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  headerTextWrapper: {
    justifyContent: "center",
    height: 50,
  },
});
