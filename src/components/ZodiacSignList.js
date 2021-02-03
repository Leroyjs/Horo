import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { CircleButtonBorder } from './UI/CircleButtonBorder';

export const ZodiacSignList = ({
    zodiacSignList,
    activeIndex,
    changeActiveZodiac,
}) => {
    return (
        <View style={styles.zodiacSignList}>
            {zodiacSignList.map((item, index) => (
                <View key={index} style={styles.zodiacSignItem}>
                    <CircleButtonBorder
                        pressHandler={() => changeActiveZodiac(index)}
                        isActive={index === activeIndex}
                        img={item.img}
                    ></CircleButtonBorder>
                    <Text
                        style={
                            index === activeIndex
                                ? {
                                      ...styles.zodiacSignText,
                                      color: '#ffffff',
                                  }
                                : styles.zodiacSignText
                        }
                    >
                        {item.title}
                    </Text>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    zodiacSignList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
    },
    zodiacSignItem: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    zodiacSignText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.4)',
        marginLeft: 5,
    },
});
