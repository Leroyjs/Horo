import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const HoroImg = ({ img }) => {
    return (
        <View style={styles.imgWrapper}>
            <Image source={img} style={styles.img}></Image>
            <TouchableOpacity style={styles.imgShareWrapper}>
                <Image
                    style={styles.imgShare}
                    source={require('../../assets/componentImages/share.png')}
                ></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imgWrapper: {
        position: 'relative',
        width: deviceWidth - 40,
        height: (deviceWidth - 40) * 1.21428571429,
        marginTop: 20,
        marginBottom: 20,
    },
    imgShareWrapper: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1);',
        bottom: 10,
        left: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgShare: {
        width: 20,
        height: 20,
    },
});
