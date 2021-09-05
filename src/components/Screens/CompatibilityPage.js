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
import { HoroImg } from "../HoroImg";
import { HoroText } from "../HoroText";
import { Statistics } from "../Statistics";
import { MainButtonTransparent } from "../UI/MainButtonTransparent";
import { CompatibilityHeader } from "../CompatibilityHeader";
import { StatisticsCircle } from "../StatisticsCircle";
import { useSelector } from "react-redux";

export const CompatibilityPage = ({ navigation }) => {
  const compatibility = useSelector((state) => state.compatibility);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewInner}>
        <Header navigation={navigation} arrow={true} shareHandler={true}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Совместимость</Text>
          </View>
        </Header>
        <CompatibilityHeader
          genderFirst={compatibility.genderFirst}
          genderSecond={compatibility.genderSecond}
          zodiacSignIdFirst={compatibility.zodiacSignIdFirst}
          zodiacSignIdSecond={compatibility.zodiacSignIdSecond}
        ></CompatibilityHeader>
        <StatisticsCircle percent={74}></StatisticsCircle>
        <HoroImg img={img}></HoroImg>
        <HoroText content={content}></HoroText>
        <Statistics statistics={statistics}></Statistics>
        <View style={{ marginTop: 20 }}>
          <MainButtonTransparent
            pressHandler={() => navigation.navigate("Main")}
            text={"Посмотреть гороскоп (Овен)"}
          ></MainButtonTransparent>
        </View>
        <View style={{ marginTop: 10 }}>
          <MainButtonTransparent
            pressHandler={() => navigation.navigate("Main")}
            text={"Посмотреть гороскоп (Водолей)"}
          ></MainButtonTransparent>
        </View>
        <View style={{ marginTop: 10 }}>
          <MainButtonTransparent text={"Поделиться"}></MainButtonTransparent>
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

const img = require("../../../assets/exPhoto.png");

const content = [
  {
    type: "text",
    content: `Насыщенный и непростой день. Будет много дел и забот. Не исключено, что придется заниматься чем-то совершенно новым, учиться на ходу. Это непросто, но увлекательно. Вы с энтузиазмом беретесь за решение сложных задач и справляетесь с тем, что оказалось не по силам другим. Окружающие не скупятся на интересные предложения; над ответом на них можно подумать до следующего года.`,
  },
  {
    type: "advertising",
    img: { uri: "https://reactjs.org/logo-og.png" },
    url: "https://switch-case.ru/63227803",
  },
  {
    type: "text",
    content: `Вероятны знакомства с людьми, о которых вы прежде слышали много интересного, или даже личная встреча с тем, кто был вам давно заочно симпатичен. Возможно начало дружеских отношений.`,
  },
];
const statistics = [
  {
    title: "Супружество",
    value: 3,
  },
  {
    title: "Удача",
    value: 4,
  },
  {
    title: "Секс",
    value: 1,
  },
  {
    title: "Богатство",
    value: 5,
  },
  {
    title: "Дети",
    value: 1,
  },
];
