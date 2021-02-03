import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import NavigationService from '../NavigationService';

import { CircleButtonTransparent } from './UI/CircleButtonTransparent';

const profile = require('../../assets/componentImages/profile.png');
const menu = require('../../assets/componentImages/menu.png');
const myZodiac = require('../../assets/zodiacSigns/Овен.png');

export const NavMenu = ({}) => {
    return (
        <View style={styles.navMenu}>
            <CircleButtonTransparent
                pressHandler={() => NavigationService.navigate('Menu')}
                img={menu}
            ></CircleButtonTransparent>
            <CircleButtonTransparent
                pressHandler={() => NavigationService.navigate('Main')}
                img={myZodiac}
            ></CircleButtonTransparent>
            <CircleButtonTransparent
                pressHandler={() => NavigationService.navigate('Friends')}
                img={profile}
            ></CircleButtonTransparent>
        </View>
    );
};

const styles = StyleSheet.create({
    navMenu: {
        minHeight: 80,
        backgroundColor: '#31426E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});
