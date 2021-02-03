import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export const ButtonsList = ({ navigation, buttonsList }) => {
    const ButtonItem = ({ title, handler }) => {
        return (
            <TouchableOpacity style={styles.buttonItem} onPress={handler}>
                <Text style={styles.buttonItemText}>{title}</Text>
                <Image
                    style={styles.buttonItemArrow}
                    source={require('../../../assets/componentImages/arrowRight.png')}
                ></Image>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.buttonsList}>
            {buttonsList.map((item) => (
                <ButtonItem
                    title={item.title}
                    key={item.title}
                    handler={item.handler}
                ></ButtonItem>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonItem: {
        marginTop: -1,
        height: 88,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 20,
    },
    buttonItemText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    buttonItemArrow: {
        height: 10,
        width: 5,
    },
    buttonsList: {
        marginLeft: -20,
        marginRight: -20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
});
