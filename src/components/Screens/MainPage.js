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

import { MainHeader } from '../MainHeader';
import { HoroImg } from '../HoroImg';
import { HorizontalScroll } from '../UI/HorizontalScroll';
import { HoroText } from '../HoroText';
import { Statistics } from '../Statistics';
import { MainButtonTransparent } from '../UI/MainButtonTransparent';

import { useSelector, useDispatch } from 'react-redux';

import { Base64 } from 'js-base64';

const img = require('../../../assets/exPhoto.png');

const axios = require('axios').default;

const content = [
    {
        type: 'text',
        content: `Насыщенный и непростой день. Будет много дел и забот. Не исключено, что придется заниматься чем-то совершенно новым, учиться на ходу. Это непросто, но увлекательно. Вы с энтузиазмом беретесь за решение сложных задач и справляетесь с тем, что оказалось не по силам другим. Окружающие не скупятся на интересные предложения; над ответом на них можно подумать до следующего года.`,
    },
    {
        type: 'advertising',
        img: { uri: 'https://reactjs.org/logo-og.png' },
        url: 'https://switch-case.ru/63227803',
    },
    {
        type: 'text',
        content: `Вероятны знакомства с людьми, о которых вы прежде слышали много интересного, или даже личная встреча с тем, кто был вам давно заочно симпатичен. Возможно начало дружеских отношений.`,
    },
];
const statistics = [
    {
        title: 'Бизнес',
        value: 3,
    },
    {
        title: 'Любовь',
        value: 4,
    },
    {
        title: 'Здоровье',
        value: 1,
    },
];

export const MainPage = ({ navigation }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [zodiacHoroscope, setZodiacHoroscope] = useState({
        text: [],
        metrics: [],
    });

    let account = useSelector((state) => state.account);
    // console.log(account.zodiac.id);

    const goToCompatibility = () => {
        navigation.navigate('CompatibilityConfiguration');
    };
    const shareHandler = () => {
        console.log('share');
    };

    const choiceItems = [
        {
            mainText: 'Сегодня',
            subText: '12.05',
            handle: () => handleZodiac(0),
        },
        {
            mainText: 'Завтра',
            subText: '12.05',
            handle: () => handleZodiac(1),
        },
        {
            mainText: 'Месяц',
            subText: '12.05',
            handle: () => handleZodiac(2),
        },
        {
            mainText: 'Год',
            subText: '12.05',
            handle: () => handleZodiac(3),
        },
    ];
    useEffect(() => {
        handleZodiac(0);
    });
    const handleZodiac = (index) => {
        let url = 'https://ho-ro.ru/v1/horoscopes/search';
        console.log(account);
        axios
            .get(
                url,

                {
                    headers: {
                        Authorization:
                            'Basic ' + Base64.encode(account.token + ':'),
                    },
                    params: { zodiac_id: account.zodiac.id, d: index },
                }
            )
            .then(function (response) {
                console.log(response.data);
                setActiveItem(index);
                setZodiacHoroscope(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <MainHeader
                    navigation={navigation}
                    shareHandler={shareHandler}
                ></MainHeader>
                <HoroImg img={img}></HoroImg>
                <HorizontalScroll
                    activeItemId={activeItem}
                    choiceItems={choiceItems}
                ></HorizontalScroll>
                <HoroText content={zodiacHoroscope.text}></HoroText>
                <Statistics statistics={zodiacHoroscope.metrics}></Statistics>
                <View style={{ marginTop: 20 }}>
                    <MainButtonTransparent
                        pressHandler={goToCompatibility}
                        text={'Посмотреть совместимость'}
                    ></MainButtonTransparent>
                </View>
                <View style={{ marginTop: 10 }}>
                    <MainButtonTransparent
                        text={'Поделиться'}
                    ></MainButtonTransparent>
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
        paddingVertical: 46,
    },
});
