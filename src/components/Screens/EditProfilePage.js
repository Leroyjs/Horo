import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { editProfileSave } from "../../redux/actions/account";
import { GenderSelection } from "../GenderSelection";

import { Header } from "../Header";
import { CircleButtonBorder } from "../UI/CircleButtonBorder";
import { MainButton } from "../UI/MainButton";

const vk = require("../../../assets/socials/vk.png");
const fb = require("../../../assets/socials/fb.png");
const ok = require("../../../assets/socials/ok.png");

export const EditProfilePage = ({ navigation }) => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState();
  const [gender, setGender] = useState(account.gender);
  const [name, setName] = useState(account.name);
  function handleSave() {
    dispatch(editProfileSave({ avatar, gender, name }));
    navigation.navigate("Menu");
  }
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewInner}>
          <View style={styles.paddingHorizontal}>
            <Header navigation={navigation} arrow={true}>
              <View style={styles.headerTextWrapper}>
                <Text style={styles.headerText}>Редактировать</Text>
              </View>
            </Header>
          </View>
          <View style={{ ...styles.photoSection, ...styles.section }}>
            <Text style={styles.title}>Фото профиля</Text>

            {avatar ? (
              <View style={styles.photoWrapper}>
                <Image style={{}} source={avatar}></Image>
              </View>
            ) : (
              <TouchableOpacity style={styles.photoWrapper}>
                <Text style={styles.headerText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ ...styles.paddingHorizontal, ...styles.section }}>
            <Text style={styles.title}>Как вас зовут?</Text>
            <TextInput
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              placeholder="Введите имя"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={{ ...styles.paddingHorizontal, ...styles.section }}>
            <Text style={styles.title}>Ваш пол</Text>
            <GenderSelection
              handleGender={setGender}
              activeGender={gender}
            ></GenderSelection>
          </View>
          <View style={{ ...styles.paddingHorizontal, ...styles.section }}>
            <Text style={styles.title}>Добавить соцсети</Text>
            <View style={styles.socialWrapper}>
              <CircleButtonBorder
                img={vk}
                diameter={36}
                isActive={account.vk}
              />
              <CircleButtonBorder
                img={fb}
                diameter={36}
                isActive={account.fb}
              />
              <CircleButtonBorder
                img={ok}
                diameter={36}
                isActive={account.ok}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ ...styles.button, ...styles.paddingHorizontal }}>
        <MainButton pressHandler={handleSave} text="Сохранить" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#31426E",
  },
  button: {
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  socialWrapper: {
    marginTop: 18,
    flexDirection: "row",
  },
  scrollViewInner: {
    paddingVertical: 46,
    paddingBottom: 74,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  headerTextWrapper: {
    justifyContent: "center",
    height: 50,
  },
  photoSection: {
    marginTop: 40,
  },
  title: { fontSize: 16, color: "#FFFFFF" },
  photoWrapper: {
    overflow: "hidden",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    height: 96,
    width: 96,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },

  input: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    fontSize: 14,
    width: "100%",
    marginTop: 12,
    color: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  section: {
    marginTop: 12,
    alignItems: "center",
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 20,
  },
});
