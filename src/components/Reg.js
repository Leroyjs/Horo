import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Date } from './Date';
import { MainButton } from './UI/MainButton';
import { CircleButtonBorder } from './UI/CircleButtonBorder';
import { GenderSelection } from './GenderSelection';

const vk = require('../../assets/socials/vk.png');
const fb = require('../../assets/socials/fb.png');
const ok = require('../../assets/socials/ok.png');

export const Reg = ({ newUserRegistration }) => {
    const pressHandler = () => {
        newUserRegistration('25.12.2020');
    };
    return (
        <View style={styles.regWrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>Здравствуйте!</Text>
                <Text style={styles.text}>
                    Укажите свою дату рождения и пол и мы составим гороскоп для
                    вас и ваших друзей:
                </Text>
            </View>
            <Date></Date>
            <GenderSelection></GenderSelection>
            <Text style={styles.text}>Вы - Чертjjj</Text>
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
            <Text style={styles.text}>Зайти через номер телфеона</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    regWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#31426E',
        padding: 40,
    },
    textWrapper: {
        width: 222,
        marginHorizontal: '15.625%',
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        color: '#FFFFFF',
    },
    genderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    gender: {
        alignItems: 'center',
    },
    genderText: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 10,
        color: '#FFFFFF',
    },
    genderImg: {
        width: 26,
        height: 26,
    },

    socialWrapper: {
        flexDirection: 'row',
    },
});
