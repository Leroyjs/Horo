import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const GenderSelection = ({ activeGender, handleGender }) => {
    return (
        <View style={styles.genderWrapper}>
            <TouchableOpacity
                onPress={() => handleGender(1)}
                style={styles.gender}
            >
                <Image
                    style={{
                        ...styles.genderImg,
                        ...(activeGender === 1
                            ? { opacity: 1 }
                            : { opacity: 0.4 }),
                    }}
                    source={require('../../assets/componentImages/male.png')}
                ></Image>
                <Text
                    style={{
                        ...styles.genderText,
                        ...(activeGender === 1
                            ? { opacity: 1 }
                            : { opacity: 0.4 }),
                    }}
                >
                    Мужчина
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleGender(2)}
                style={styles.gender}
            >
                <Image
                    style={{
                        ...styles.genderImg,
                        ...(activeGender === 2
                            ? { opacity: 1 }
                            : { opacity: 0.4 }),
                    }}
                    source={require('../../assets/componentImages/female.png')}
                ></Image>
                <Text
                    style={{
                        ...styles.genderText,
                        ...(activeGender === 2
                            ? { opacity: 1 }
                            : { opacity: 0.4 }),
                    }}
                >
                    Женщина
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    genderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    gender: {
        alignItems: 'center',
    },
    genderText: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 10,
        color: '#FFFFFF',
        opacity: 0.4,
    },
    genderImg: {
        width: 26,
        height: 26,
        opacity: 0.4,
    },

    socialWrapper: {
        flexDirection: 'row',
    },
});
