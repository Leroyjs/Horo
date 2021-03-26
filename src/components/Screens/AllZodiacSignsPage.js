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

import { zodiacs } from '../../zodiac';

export const AllZodiacSignsPage = ({ navigation }) => {
    const goToZodiacSign = (index) => {
        console.log(zodiacs[index].title);
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
                    zodiacSignList={zodiacs}
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
