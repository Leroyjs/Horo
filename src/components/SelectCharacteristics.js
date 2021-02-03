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

const maleImg = require('../../assets/componentImages/male.png');
const femaleImg = require('../../assets/componentImages/female.png');

const arrowDown = require('../../assets/componentImages/arrowDown.png');
const arrowUp = require('../../assets/componentImages/arrowUp.png');

export const SelectCharacteristics = ({
    gender,
    handleChangeGender,
    isActive,
    handleActive,
    zodiacSign,
}) => {
    return (
        <View style={styles.selectCharacteristics}>
            <CircleButtonBorder
                pressHandler={handleChangeGender}
                img={gender === 'Мужчина' ? maleImg : femaleImg}
            ></CircleButtonBorder>
            <Text style={styles.selectCharacteristicsText}>
                {gender} — {zodiacSign}
            </Text>
            <CircleButtonBorder
                pressHandler={handleActive}
                img={isActive ? arrowDown : arrowUp}
                isActive={isActive}
            ></CircleButtonBorder>
        </View>
    );
};

const styles = StyleSheet.create({
    selectCharacteristics: {
        marginTop: 20,
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginLeft: -20,
        marginRight: -20,
        paddingHorizontal: 20,
    },
    selectCharacteristicsText: {
        color: '#ffffff',
        fontSize: 14,
    },
});
