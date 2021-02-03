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

export const User = ({ name, zodiac, date, avatar }) => {
    const avatarText = name && name[0];
    return (
        <View style={styles.friendWrapper}>
            <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                    {avatar ? (
                        <Image
                            style={styles.avatarImg}
                            source={{ uri: avatar }}
                        ></Image>
                    ) : (
                        <Text style={styles.avatarText}>{avatarText}</Text>
                    )}
                </View>
                <View style={styles.zodiacSignWrapper}>
                    <Image
                        style={styles.zodiacSign}
                        source={require(`../../assets/zodiacSigns/Овен.png`)}
                    ></Image>
                </View>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textMain}>{`${name} — ${zodiac}`}</Text>
                <Text style={styles.textDate}>{date}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    friendWrapper: {
        flexDirection: 'row',
    },
    avatarWrapper: {
        position: 'relative',
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
        overflow: 'hidden',
    },
    avatarImg: {
        height: '100%',
        width: '100%',
    },
    avatarText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    zodiacSignWrapper: {
        position: 'absolute',
        right: 0,
        width: 20,
        height: 20,
        backgroundColor: '#31426E',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    zodiacSign: {
        width: 8,
        height: 8,
    },
    textWrapper: {
        marginLeft: 8,
        justifyContent: 'center',
    },
    textMain: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    textDate: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 10,
    },
});
