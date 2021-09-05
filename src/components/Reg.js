import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { getZodiacSignByDate } from "../getZodiacSign";

import { DatePicker } from "./DatePicker";
import { MainButton } from "./UI/MainButton";
import { CircleButtonBorder } from "./UI/CircleButtonBorder";
import { GenderSelection } from "./GenderSelection";
import { EnterNumberPhonePage } from "./EnterNumberPhone";

const vk = require("../../assets/socials/vk.png");
const fb = require("../../assets/socials/fb.png");
const ok = require("../../assets/socials/ok.png");

export const Reg = ({ newUserRegistration }) => {
  const [date, setDate] = useState();
  const [zodiacSign, setZodiacSign] = useState({});
  const [gender, setGender] = useState(2);
  const [showNumberPhonePage, setShowNumberPhonePage] = useState(false);

  const pressHandler = () => {
    newUserRegistration({ date, gender, zodiacSign });
  };
  const newDate = (date) => {
    setZodiacSign(getZodiacSignByDate(date));
    setDate(date);
  };
  const handlePhone = () => {
    setShowNumberPhonePage((prev) => !prev);
  };
  return (
    <>
      {showNumberPhonePage ? (
        <EnterNumberPhonePage goBack={handlePhone} />
      ) : (
        <View style={styles.regWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Здравствуйте!</Text>
            <Text style={styles.text}>
              Укажите свою дату рождения и пол и мы составим гороскоп для вас и
              ваших друзей:
            </Text>
          </View>
          <DatePicker handleDate={newDate}></DatePicker>
          <GenderSelection
            handleGender={setGender}
            activeGender={gender}
          ></GenderSelection>
          <Text style={styles.text}>Вы - {zodiacSign && zodiacSign.title}</Text>
          <MainButton
            pressHandler={pressHandler}
            text="Продолжить"
          ></MainButton>
          <Text style={styles.text}>Или войдите через одну из соцсетей:</Text>
          <View style={styles.socialWrapper}>
            <CircleButtonBorder img={vk}></CircleButtonBorder>
            <CircleButtonBorder img={ok}></CircleButtonBorder>
            <CircleButtonBorder img={fb}></CircleButtonBorder>
          </View>
          <TouchableOpacity onPress={handlePhone}>
            <Text style={styles.desc}>Зайти через номер телфеона</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  regWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#31426E",
    padding: 40,
  },
  textWrapper: {
    width: 222,
    marginHorizontal: "15.625%",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#FFFFFF",
  },
  desc: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: "rgba(255, 255, 255, 0.4)",
  },
  genderWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  gender: {
    alignItems: "center",
  },
  genderText: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 10,
    color: "#FFFFFF",
  },
  genderImg: {
    width: 26,
    height: 26,
  },

  socialWrapper: {
    flexDirection: "row",
  },
});
