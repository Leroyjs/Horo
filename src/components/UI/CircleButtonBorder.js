import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export const CircleButtonBorder = ({
    img,
    pressHandler,
    isActive = false,
    diameter = 50,
}) => {
    return (
        <TouchableOpacity
            onPress={pressHandler}
            style={{
                ...styles.circleButton,
                height: diameter,
                width: diameter,
                borderColor: isActive ? '#FFB8A8' : 'rgba(255, 255, 255, 0.2)',
                backgroundColor: isActive
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0)',
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
};
const styles = StyleSheet.create({
    circleButton: {
        borderRadius: 50,
        borderWidth: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImg: {
        resizeMode: 'contain',
    },
});
