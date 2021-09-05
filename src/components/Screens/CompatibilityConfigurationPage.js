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
import { Tabs } from "../UI/Tabs";
import { SelectCharacteristics } from "../SelectCharacteristics";
import { ZodiacSignList } from "../ZodiacSignList";
import { MainButton } from "../UI/MainButton";

import { useSelector, useDispatch } from "react-redux";

import { zodiacs } from "../../zodiac";
import { setCompatibility } from "../../redux/actions/compatibility";

export const CompatibilityConfigurationPage = ({ navigation }) => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const [genderFirst, setGenderFirst] = useState(account.gender);
  const [zodiacSignIdFirst, setZodiacSignIdFirst] = useState(
    account.zodiac.id - 1
  );
  const [isActiveFirst, setActiveFirst] = useState(false);
  const changeGenderFirst = () => {
    if (genderFirst === 1) {
      setGenderFirst(2);
    }
    if (genderFirst === 2) {
      setGenderFirst(1);
    }
  };
  const handleActiveFirst = () => {
    setActiveFirst(!isActiveFirst);
  };
  const changeActiveZodiacFirst = (index) => {
    setZodiacSignIdFirst(index);
  };

  const [genderSecond, setGenderSecond] = useState(
    account.gender === 1 ? 2 : 1
  );
  const [zodiacSignIdSecond, setZodiacSignIdSecond] = useState(0);
  const [isActiveSecond, setActiveSecond] = useState(false);
  const changeGenderSecond = () => {
    if (genderSecond === 1) {
      setGenderSecond(2);
    }
    if (genderSecond === 2) {
      setGenderSecond(1);
    }
  };
  const handleActiveSecond = () => {
    setActiveSecond(!isActiveSecond);
  };
  const changeActiveZodiacSecond = (index) => {
    setZodiacSignIdSecond(index);
  };

  const goToCompatibility = () => {
    dispatch(
      setCompatibility({
        genderFirst,
        genderSecond,
        zodiacSignIdFirst,
        zodiacSignIdSecond,
      })
    );
    navigation.navigate("Compatibility");
  };
  const genderSelector = {
    1: "Мужчина",
    2: "Женщина",
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewInner}>
        <Header navigation={navigation} arrow={true}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Совместимость</Text>
          </View>
        </Header>
        <Tabs tabsList={tabsList}></Tabs>
        <SelectCharacteristics
          gender={genderSelector[genderFirst]}
          handleChangeGender={changeGenderFirst}
          isActive={isActiveFirst}
          handleActive={handleActiveFirst}
          zodiacSign={zodiacs[zodiacSignIdFirst].title}
        ></SelectCharacteristics>
        {isActiveFirst && (
          <ZodiacSignList
            changeActiveZodiac={changeActiveZodiacFirst}
            activeIndex={zodiacSignIdFirst}
            zodiacSignList={zodiacs}
          ></ZodiacSignList>
        )}
        <SelectCharacteristics
          gender={genderSelector[genderSecond]}
          handleChangeGender={changeGenderSecond}
          isActive={isActiveSecond}
          handleActive={handleActiveSecond}
          zodiacSign={zodiacs[zodiacSignIdSecond].title}
        ></SelectCharacteristics>
        {isActiveSecond && (
          <ZodiacSignList
            changeActiveZodiac={changeActiveZodiacSecond}
            activeIndex={zodiacSignIdSecond}
            zodiacSignList={zodiacs}
          ></ZodiacSignList>
        )}
        <View style={styles.button}>
          <MainButton
            pressHandler={goToCompatibility}
            text="Показать совместимость"
          ></MainButton>
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
  button: {
    marginTop: 20,
  },
});
const tabsList = [{ title: "Знаки" }, { title: "Друзья" }, { title: "Дата" }];
