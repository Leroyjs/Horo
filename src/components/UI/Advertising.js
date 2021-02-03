import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

export const Advertising = ({ data }) => {
    const handleClick = (url) => {
        Linking.openURL(url);
    };
    return (
        <TouchableOpacity
            onPress={() => handleClick(data.url)}
            style={styles.advertising}
        >
            <Image style={styles.advertisingImg} source={data.img}></Image>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    advertising: {
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        minHeight: 110,
        width: '100%',
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
    },
    advertisingImg: {
        width: '100%',
        minHeight: 120,
        resizeMode: 'cover',
    },
});
