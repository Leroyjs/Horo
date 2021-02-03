import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { Header } from '../Header';
import { Tabs } from '../UI/Tabs';
import { User } from '../User';

export const FriendsPage = ({ navigation }) => {
    const goToZodiacSign = () => {
        navigation.navigate('Zodiac');
    };

    return (
        <View style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <Header navigation={navigation} arrow={true}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Друзья</Text>
                    </View>
                </Header>
                <Tabs tabsList={tabsList}></Tabs>
                <FlatList
                    style={styles.frendsList}
                    data={friendsList}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.friendWrapper}
                            key={item.id.toString()}
                            onPress={goToZodiacSign}
                        >
                            <User
                                id={item.id}
                                name={item.name}
                                zodiac={item.zodiac}
                                date={item.date}
                                avatar={item.avatar}
                            ></User>
                        </TouchableOpacity>
                    )}
                ></FlatList>
            </View>
        </View>
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
    frendsList: {
        flex: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        marginLeft: -20,
        marginRight: -20,
        paddingHorizontal: 20,
        marginTop: 20,
        paddingBottom: 0,
    },
    contentContainer: {
        paddingVertical: 20,
    },
    friendWrapper: {
        marginBottom: 8,
    },
});
const tabsList = [
    {
        title: 'ВКонтакте',
    },
    {
        title: 'Телефон',
    },
];
const friendsList = [
    {
        id: 0,
        name: 'Иван',
        zodiac: 'Овен',
        date: '18.04.1996',
        avatar: false,
    },
    {
        id: 1,
        name: 'Елизавета',
        zodiac: 'Телец',
        date: '18.04.1996',
        avatar: false,
    },
    {
        id: 2,
        name: 'Саня',
        zodiac: 'Рак',
        date: '18.04.1996',
        avatar: 'https://reactjs.org/logo-og.png',
    },
];
