import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const MainButton = ({ pressHandler, text, moreStyle = {} }) => {
    return (
        <TouchableOpacity
            onPress={pressHandler}
            style={{ ...styles.button, ...moreStyle }}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 14,
        backgroundColor: '#FFB8A8',
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#31426E',
    },
});
