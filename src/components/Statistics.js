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

export const Statistics = ({ statistics }) => {
    return (
        <View>
            {statistics.map((item) => (
                <View
                    key={item.title + '-' + item.value}
                    style={styles.statisticsRow}
                >
                    <Text style={styles.statisticsText}>{item.title}:</Text>
                    <Points value={item.value}></Points>
                </View>
            ))}
        </View>
    );
};
const Points = ({ value }) => (
    <View style={styles.statisticsRow}>
        <View
            style={
                value >= 1 ? styles.statisticsActive : styles.statisticsPoint
            }
        ></View>
        <View
            style={
                value >= 2 ? styles.statisticsActive : styles.statisticsPoint
            }
        ></View>
        <View
            style={
                value >= 3 ? styles.statisticsActive : styles.statisticsPoint
            }
        ></View>
        <View
            style={
                value >= 4 ? styles.statisticsActive : styles.statisticsPoint
            }
        ></View>
        <View
            style={
                value >= 5 ? styles.statisticsActive : styles.statisticsPoint
            }
        ></View>
    </View>
);

const styles = StyleSheet.create({
    statisticsRow: {
        marginVertical: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statisticsText: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        lineHeight: 17,
    },
    statisticsPoint: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: 10,
        width: 10,
        borderRadius: 5,
        marginLeft: 24,
    },
    statisticsActive: {
        backgroundColor: '#FFB8A8',
        height: 10,
        width: 10,
        borderRadius: 5,
        marginLeft: 24,
    },
});
