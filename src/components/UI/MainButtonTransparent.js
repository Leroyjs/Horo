import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const MainButtonTransparent = ({
    pressHandler,
    text,
    moreStyle = {},
}) => {
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
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRadius: 4,
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    buttonText: {
        fontSize: 14,
        color: '#ffffff',
    },
});
