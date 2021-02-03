import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export const Date = ({}) => {
    const [day, setDay] = useState(false);
    return (
        <View style={styles.dateWrapper}>
            <ScrollView
                onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
            >
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>1</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>2</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>3</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>4</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>5</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>6</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>7</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>8</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>9</Text>
                </View>
            </ScrollView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
            >
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>1</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>2</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>3</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>4</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>5</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>6</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>7</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>8</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>9</Text>
                </View>
            </ScrollView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
            >
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>1</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>2</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>3</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>4</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>5</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>6</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>7</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>8</Text>
                </View>
                <View style={styles.dateTextWrapper}>
                    <Text style={styles.dateText}>9</Text>
                </View>
            </ScrollView>
            <LinearGradient
                colors={['rgba(49,66,110,1)', 'rgba(49,66,110,0)']}
                style={styles.overlayTop}
                pointerEvents="none"
            ></LinearGradient>
            <LinearGradient
                colors={['rgba(49,66,110,0)', 'rgba(49,66,110,1)']}
                style={styles.overlayBottom}
                pointerEvents="none"
            ></LinearGradient>
        </View>
    );
};
const some = (e) => {
    console.log(e.locationX);
};

const styles = StyleSheet.create({
    dateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 96,
        overflow: 'hidden',
        position: 'relative',
    },
    dateText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    dateTextWrapper: {
        height: 32,
    },
    dateColumn: {
        alignItems: 'center',
    },
    overlayBottom: {
        position: 'absolute',
        height: 40,
        width: '100%',
        left: 0,
        bottom: 0,
    },
    overlayTop: {
        position: 'absolute',
        height: 40,
        width: '100%',
        left: 0,
        top: 0,
    },
});
