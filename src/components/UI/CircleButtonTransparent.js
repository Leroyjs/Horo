import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';

export const CircleButtonTransparent = ({
    img,
    pressHandler,
    diameter = 50,
}) => (
    <TouchableOpacity
        onPress={pressHandler}
        style={{
            ...styles.circleButton,
            height: diameter,
            width: diameter,
        }}
    >
        <Image
            style={{
                ...styles.circleImg,
                height: (diameter / 5) * 2,
                width: (diameter / 5) * 2,
            }}
            source={img}
        ></Image>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    circleImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    circleButton: {
        height: 50,
        width: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
