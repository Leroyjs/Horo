import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Header } from "./Header";
import { MainButton } from "./UI/MainButton";
export const EnterNumberPhonePage = ({ goBack }) => {
  const navigation = { goBack };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Header arrow={true} navigation={navigation}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Регистрация</Text>
          </View>
        </Header>
      </View>
      <Text style={styles.title}>Введите ваш {"\n"} номер телефона</Text>
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
        placeholder="+7"
        style={styles.input}
      />
      <View style={styles.button}>
        <MainButton text="Продолжить" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31426E",
  },
  header: {
    top: 0,
    left: 20,
    width: "100%",
    paddingTop: 46,
    position: "absolute",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  headerTextWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  title: {
    width: 209,
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 22,
  },
  input: {
    marginTop: 20,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    fontSize: 14,
    width: "100%",
    color: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
