import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export const Header = ({
    navigation,
    children,
    arrow = false,
    shareHandler = false,
}) => {
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <View
                style={{
                    ...styles.headerColumn,
                    alignItems: 'flex-start',
                    width: 24,
                    height: 22,
                }}
            >
                {arrow && (
                    <TouchableOpacity onPress={handleBack}>
                        <Image
                            style={styles.back}
                            source={require('../../assets/componentImages/back.png')}
                        ></Image>
                    </TouchableOpacity>
                )}
            </View>
            {children}
            <View
                style={{
                    ...styles.headerColumn,
                    alignItems: 'flex-end',
                    width: 22,
                    height: 22,
                }}
            >
                {shareHandler && (
                    <TouchableOpacity onPress={shareHandler}>
                        <Image
                            style={styles.share}
                            source={require('../../assets/componentImages/share.png')}
                        ></Image>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerColumn: {
        alignItems: 'center',
    },
    share: {
        marginTop: 12,
        width: 22,
        height: 22,
    },
    back: {
        marginTop: 16,
        width: 24,
        height: 22,
        resizeMode: 'contain',
    },
});
