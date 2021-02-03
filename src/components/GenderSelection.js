import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const GenderSelection = ({}) => {
    return (
        <View style={styles.genderWrapper}>
            <TouchableOpacity style={styles.gender}>
                <Image
                    style={styles.genderImg}
                    source={require('../../assets/componentImages/male.png')}
                ></Image>
                <Text style={styles.genderText}>Мужчина</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gender}>
                <Image
                    style={styles.genderImg}
                    source={require('../../assets/componentImages/female.png')}
                ></Image>
                <Text style={styles.genderText}>Женщина</Text>
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
    },
    genderImg: {
        width: 26,
        height: 26,
    },

    socialWrapper: {
        flexDirection: 'row',
    },
});
