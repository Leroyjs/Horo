import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { getZodiacSignById } from "../getZodiacSign";

const male = require("../../assets/componentImages/male.png");
const female = require("../../assets/componentImages/female.png");

export const CompatibilityHeader = ({
  genderFirst,
  genderSecond,
  zodiacSignIdFirst,
  zodiacSignIdSecond,
}) => {
  const zodiacSignFirst = useMemo(() => {
    const zodiacSign = getZodiacSignById(zodiacSignIdFirst + 1);
    return zodiacSign;
  }, [zodiacSignIdFirst]);
  const zodiacSignSecond = useMemo(() => {
    const zodiacSign = getZodiacSignById(zodiacSignIdSecond + 1);
    return zodiacSign;
  }, [zodiacSignIdSecond]);
  return (
    <View style={styles.compatibilityHeaderWrapper}>
      <View style={styles.compatibilityHeaderItemsWrapper}>
        <View style={styles.compatibilityHeaderItems}>
          <View style={styles.compatibilityHeaderItemBorder}>
            <Image
              style={styles.compatibilityHeaderItemImg}
              source={genderFirst === 1 ? male : female}
            ></Image>
          </View>
          <View
            style={{
              ...styles.compatibilityHeaderItemBorder,
              marginLeft: -6,
            }}
          >
            <Image
              style={styles.compatibilityHeaderItemImg}
              source={zodiacSignFirst.img}
            ></Image>
          </View>
        </View>
        <Text style={styles.compatibilityHeaderItemsText}>
          {genderFirst === 1 ? "Мужчина" : "Женщина"} — {zodiacSignFirst.title}
        </Text>
      </View>
      <Image
        style={styles.compatibilityHeaderPlus}
        source={require("../../assets/componentImages/plus.png")}
      ></Image>
      <View style={styles.compatibilityHeaderItemsWrapper}>
        <View style={styles.compatibilityHeaderItems}>
          <View style={styles.compatibilityHeaderItemBorder}>
            <Image
              style={styles.compatibilityHeaderItemImg}
              source={genderSecond === 1 ? male : female}
            ></Image>
          </View>
          <View
            style={{
              ...styles.compatibilityHeaderItemBorder,
              marginLeft: -6,
            }}
          >
            <Image
              style={styles.compatibilityHeaderItemImg}
              source={zodiacSignSecond.img}
            ></Image>
          </View>
        </View>
        <Text style={styles.compatibilityHeaderItemsText}>
          {genderSecond === 1 ? "Мужчина" : "Женщина"} —{" "}
          {zodiacSignSecond.title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  compatibilityHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginLeft: -20,
    marginRight: -20,
    padding: 20,
  },
  compatibilityHeaderItems: {
    flexDirection: "row",
  },
  compatibilityHeaderItemsWrapper: {
    alignItems: "center",
  },
  compatibilityHeaderItemsText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 10,
  },
  compatibilityHeaderItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  compatibilityHeaderItemImg: {
    height: 20,
    width: 20,
  },
  compatibilityHeaderPlus: {
    height: 12,
    width: 12,
  },
});
