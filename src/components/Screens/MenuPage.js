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
import { User } from "../User";
import { MainButtonTransparent } from "../UI/MainButtonTransparent";
import { ButtonsList } from "../UI/ButtonsList";
import { MainButton } from "../UI/MainButton";
import { useSelector } from "react-redux";
import { getDateString } from "../../getDateString";
import { CircleButtonBorder } from "../UI/CircleButtonBorder";

const vk = require("../../../assets/socials/vk.png");
const fb = require("../../../assets/socials/fb.png");
const ok = require("../../../assets/socials/ok.png");

export const MenuPage = ({ navigation }) => {
  const account = useSelector((state) => state.account);
  console.log(account);
  const buttonsList = [
    {
      title: "Мой гороскоп",
      handler: () => handlerPage("Main"),
    },
    {
      title: "Все знаки",
      handler: () => handlerPage("AllZodiacSigns"),
    },
    {
      title: "Друзья",
      handler: () => handlerPage("Friends"),
    },
    {
      title: "Настройки",
      handler: () => handlerPage("Settings"),
    },
  ];

  const handlerPage = (page) => {
    navigation.navigate(page);
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewInner}>
        <Header navigation={navigation} arrow={true}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Меню</Text>
          </View>
        </Header>
        <View style={styles.userWrapper}>
          <User
            name={account.name}
            zodiac={account.zodiac}
            date={getDateString(account.date)}
            avatar={account.avatar}
          ></User>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Добавить соцсети</Text>
          <View style={styles.socialWrapper}>
            <CircleButtonBorder img={vk} diameter={36} isActive={account.vk} />
            <CircleButtonBorder img={fb} diameter={36} isActive={account.fb} />
            <CircleButtonBorder img={ok} diameter={36} isActive={account.ok} />
          </View>
          {account.phoneNumber ? (
            <Text style={styles.text}>Используется {account.phoneNumber}</Text>
          ) : (
            <TouchableOpacity>
              <Text style={{ ...styles.text, ...styles.textDecorationLine }}>
                Привяжите номер телефона
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <MainButtonTransparent
            pressHandler={() => handlerPage("EditProfile")}
            text="Редактировать"
          ></MainButtonTransparent>
        </View>
        <ButtonsList
          navigation={navigation}
          buttonsList={buttonsList}
        ></ButtonsList>
        <View style={styles.buttonWrapper}>
          <MainButton text="Оставить отзыв"></MainButton>
        </View>
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
    paddingTop: 46,
    flex: 1,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  headerTextWrapper: {
    justifyContent: "center",
    height: 50,
  },
  userWrapper: {
    marginTop: 40,
  },
  text: {
    marginTop: 20,
    color: "#FFFFFF",
  },

  textWrapper: {
    marginTop: 2,
  },
  textDecorationLine: {
    textDecorationLine: "underline",
    color: "rgba(255, 255, 255, 0.4)",
  },
  socialWrapper: {
    marginTop: 8,
    marginLeft: -5,
    flexDirection: "row",
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});

const user = {
  name: "Саня",
  zodiac: "Рак",
  date: "18.04.1996",
  avatar: "https://reactjs.org/logo-og.png",
};
