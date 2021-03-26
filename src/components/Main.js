import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { NavMenu } from './NavMenu';
import { AppNavigation } from './AppNavigation';

import NavigationService from '../NavigationService';
import { Reg } from '../components/Reg.js';

import { useSelector, useDispatch } from 'react-redux';
import { registration } from '../redux/actions/account';

const axios = require('axios').default;

const apiKey = '123';

export const Main = () => {
    const initialAccount = useSelector((state) => state.account);
    const [account, setAccount] = useState(initialAccount);

    const dispatch = useDispatch();

    const newUserRegistration = (data) => {
        const dateString = `${
            data.date.day >= 10 ? data.date.day : '0' + data.date.day
        }.${data.date.month >= 10 ? data.date.month : '0' + data.date.month}.${
            data.date.year
        }`;
        console.log(dateString, data.gender);
        axios
            .post(
                'https://ho-ro.ru/v1/users',
                { birthday: dateString, sex: data.gender },
                {
                    headers: { 'x-api-key': apiKey },
                }
            )
            .then(function (response) {
                console.log(data.zodiacSign);
                dispatch(
                    registration({
                        date: data.date,
                        gender: data.gender,
                        token: response.data,
                        zodiac: data.zodiacSign,
                    })
                );
                setAccount(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return account ? (
        <View style={styles.wrapper}>
            <AppNavigation
                ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            ></AppNavigation>
            <NavMenu></NavMenu>
        </View>
    ) : (
        <Reg newUserRegistration={newUserRegistration}></Reg>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#31426E',
    },
});
