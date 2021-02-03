import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PreloaderMain() {
    return (
        <View style={styles.preloaderWrapper}>
            <Image source={require('../../assets/preloader.png')}></Image>
            <Text style={styles.text}>Необычные гороскопы!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    preloaderWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#31426E',
    },
    text: {
        marginTop: 20,
        fontSize: 12,
        color: '#FFFFFF',
    },
});
