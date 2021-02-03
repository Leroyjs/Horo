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

export const Tabs = ({ tabsList }) => {
    return (
        <View style={styles.tabsWrapper}>
            {tabsList.map((item) => (
                <TouchableOpacity key={item.title} style={styles.tabsItem}>
                    <Text style={styles.tabsItemText}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    tabsWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tabsItemText: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 14,
    },
    tabsItem: {
        width: '33%',
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
