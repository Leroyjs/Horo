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

import { Header } from '../Header';
import { User } from '../User';
import { MainButtonTransparent } from '../UI/MainButtonTransparent';
import { ButtonsList } from '../UI/ButtonsList';
import { MainButton } from '../UI/MainButton';

export const MenuPage = ({ navigation }) => {
    const buttonsList = [
        {
            title: 'Мой гороскоп',
            handler: () => handlerPage('Main'),
        },
        {
            title: 'Все знаки',
            handler: () => handlerPage('AllZodiacSigns'),
        },
        {
            title: 'Друзья',
            handler: () => handlerPage('Friends'),
        },
        {
            title: 'Настройки',
            handler: () => handlerPage('Settings'),
        },
    ];

    const handlerPage = (page) => {
        navigation.navigate(page);
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <Header
                    navigation={navigation}
                    arrow={true}
                    shareHandler={true}
                >
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Меню</Text>
                    </View>
                </Header>
                <View style={styles.userWrapper}>
                    <User
                        id={user.id}
                        name={user.name}
                        zodiac={user.zodiac}
                        date={user.date}
                        avatar={user.avatar}
                    ></User>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>Используется ВКонтакте</Text>
                    <Text style={styles.text}>
                        Используется +7 (963) 009 14 25
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <MainButtonTransparent
                        pressHandler={() => handlerPage('EditProfile')}
                        text="Редактировать"
                    ></MainButtonTransparent>
                </View>
                <ButtonsList
                    navigation={navigation}
                    buttonsList={buttonsList}
                ></ButtonsList>
                <View style={styles.buttonWrapper}>
                    <MainButton text="Оставить отзыв"></MainButton>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#31426E',
    },
    scrollViewInner: {
        paddingHorizontal: 20,
        paddingTop: 46,
        flex: 1,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    headerTextWrapper: {
        justifyContent: 'center',
        height: 50,
    },
    userWrapper: {
        marginTop: 40,
    },
    text: {
        marginTop: 6,
        color: 'rgba(255, 255, 255, 0.4)',
    },
    textWrapper: {
        marginTop: 2,
    },
    buttonWrapper: {
        marginVertical: 20,
    },
});

const user = {
    name: 'Саня',
    zodiac: 'Рак',
    date: '18.04.1996',
    avatar: 'https://reactjs.org/logo-og.png',
};
