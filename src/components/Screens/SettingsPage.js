import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { Header } from '../Header';
import { ButtonsList } from '../UI/ButtonsList';

export const SettingsPage = ({ navigation }) => {
    const buttonsList = [
        {
            title: 'Уведомления',
            handler: () => handlerPage('Main'),
        },
        {
            title: 'Пользовательское соглашение',
            handler: () => handlerPage('Main'),
        },
        {
            title: 'Политика конфиденциальности',
            handler: () => handlerPage('Main'),
        },
    ];

    const handlerPage = (page) => {
        navigation.navigate(page);
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <Header navigation={navigation} arrow={true}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Настройки</Text>
                    </View>
                </Header>
                <View style={styles.buttonsListWrapper}>
                    <ButtonsList buttonsList={buttonsList}></ButtonsList>
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
    buttonsListWrapper: {
        marginTop: 40,
    },
});
