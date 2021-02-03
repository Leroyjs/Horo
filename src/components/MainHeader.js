import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { CircleButtonBorder } from './UI/CircleButtonBorder';
import { Header } from './Header';

const myZodiac = require('../../assets/zodiacSigns/Овен.png');

export const MainHeader = ({
    navigation,
    arrow,
    buttonActive,
    shareHandler,
}) => {
    const goToZodiacSign = () => {
        buttonActive ? navigation.goBack() : navigation.navigate('ZodiacSign');
    };

    return (
        <>
            <Header
                navigation={navigation}
                arrow={arrow}
                shareHandler={shareHandler}
            >
                <View style={styles.headerColumn}>
                    <CircleButtonBorder
                        isActive={buttonActive}
                        pressHandler={goToZodiacSign}
                        img={myZodiac}
                    ></CircleButtonBorder>
                    <Text style={styles.zodiacSignsText}>Овен</Text>
                    <Text style={styles.zodiacSignsDate}>21.03 — 19.04</Text>
                </View>
            </Header>
        </>
    );
};

const styles = StyleSheet.create({
    headerColumn: {
        alignItems: 'center',
    },
    zodiacSignsText: {
        marginTop: 8,
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 28,
    },
    zodiacSignsDate: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    zodiacSigns: {
        height: 20,
        width: 20,
    },
});
