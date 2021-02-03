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
import { ZodiacSignList } from '../ZodiacSignList';

export const AllZodiacSignsPage = ({ navigation }) => {
    const goToZodiacSign = (index) => {
        console.log(zodiacSignList[index].title);
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <Header navigation={navigation} arrow={true}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Все знаки</Text>
                    </View>
                </Header>
                <ZodiacSignList
                    changeActiveZodiac={goToZodiacSign}
                    zodiacSignList={zodiacSignList}
                ></ZodiacSignList>
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
        paddingVertical: 46,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    headerTextWrapper: {
        justifyContent: 'center',
        height: 50,
    },
});

const zodiacSignList = [
    {
        img: require('../../../assets/zodiacSigns/Овен.png'),
        title: 'Овен',
    },
    {
        img: require('../../../assets/zodiacSigns/Телец.png'),
        title: 'Телец',
    },
    {
        img: require('../../../assets/zodiacSigns/Близнецы.png'),
        title: 'Близнецы',
    },
    {
        img: require('../../../assets/zodiacSigns/Рак.png'),
        title: 'Рак',
    },
    {
        img: require('../../../assets/zodiacSigns/Лев.png'),
        title: 'Лев',
    },
    {
        img: require('../../../assets/zodiacSigns/Дева.png'),
        title: 'Дева',
    },
    {
        img: require('../../../assets/zodiacSigns/Весы.png'),
        title: 'Весы',
    },
    {
        img: require('../../../assets/zodiacSigns/Скорпион.png'),
        title: 'Скорпион',
    },
    {
        img: require('../../../assets/zodiacSigns/Стрелец.png'),
        title: 'Стрелец',
    },
    {
        img: require('../../../assets/zodiacSigns/Козерог.png'),
        title: 'Козерог',
    },
    {
        img: require('../../../assets/zodiacSigns/Водолей.png'),
        title: 'Водолей',
    },
    {
        img: require('../../../assets/zodiacSigns/Рыбы.png'),
        title: 'Рыбы',
    },
];
