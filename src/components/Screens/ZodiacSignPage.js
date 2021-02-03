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
import { HorizontalScroll } from '../UI/HorizontalScroll';
import { HoroText } from '../HoroText';
import { MainButtonTransparent } from '../UI/MainButtonTransparent';

const choiceItems = [
    {
        mainText: 'Описание',
        link: '',
    },
    {
        mainText: 'Любовь',
        link: '',
    },
    {
        mainText: 'Характер',
        link: '',
    },
    {
        mainText: 'Карьера',
        link: '',
    },
];
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

export const ZodiacSignPage = ({ navigation }) => {
    const shareHandler = () => {
        console.log('share');
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <MainHeader
                    shareHandler={shareHandler}
                    navigation={navigation}
                    arrow={true}
                    buttonActive={true}
                ></MainHeader>
                <HorizontalScroll choiceItems={choiceItems}></HorizontalScroll>
                <HoroText content={content}></HoroText>
                <View style={{ marginTop: 20 }}>
                    <MainButtonTransparent
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
