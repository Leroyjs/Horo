import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { CircleButtonBorder } from "./UI/CircleButtonBorder";
import { Header } from "./Header";

import { getDateString } from "../getDateString";

export const MainHeader = ({
  navigation,
  arrow,
  buttonActive,
  shareHandler,
  zodiac,
}) => {
  const goToZodiacSign = () => {
    buttonActive ? navigation.goBack() : navigation.navigate("ZodiacSign");
  };
  const dateString =
    getDateString(zodiac.dateFrom) + " — " + getDateString(zodiac.dateTo);
  return (
    <>
      <Header navigation={navigation} arrow={arrow} shareHandler={shareHandler}>
        <View style={styles.headerColumn}>
          <CircleButtonBorder
            isActive={buttonActive}
            pressHandler={goToZodiacSign}
            img={zodiac.img}
          ></CircleButtonBorder>
          <Text style={styles.zodiacSignsText}>{zodiac.title}</Text>
          <Text style={styles.zodiacSignsDate}>{dateString}</Text>
        </View>
      </Header>
    </>
  );
};

const styles = StyleSheet.create({
  headerColumn: {
    alignItems: "center",
  },
  zodiacSignsText: {
    marginTop: 8,
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 28,
  },
  zodiacSignsDate: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  zodiacSigns: {
    height: 20,
    width: 20,
  },
});
