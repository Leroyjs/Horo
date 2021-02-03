import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavMenu } from './NavMenu';
import { AppNavigation } from './AppNavigation';
import NavigationService from '../NavigationService';
export const Main = () => {
    return (
        <View style={styles.wrapper}>
            <AppNavigation
                ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            ></AppNavigation>
            <NavMenu></NavMenu>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#31426E',
    },
});
