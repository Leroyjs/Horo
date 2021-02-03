import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const HorizontalScroll = ({ choiceItems = [] }) => {
    return (
        <ScrollView style={styles.choiceItemWrapper} horizontal={true}>
            <View style={styles.choiceItemWrapperInner}>
                {choiceItems.map((item) => (
                    <TouchableOpacity
                        key={item.mainText + item.subText}
                        style={styles.choiceItem}
                    >
                        <Text style={styles.choiceItemMainText}>
                            {item.mainText}
                        </Text>
                        {item.subText && (
                            <Text style={styles.choiceItemDate}>
                                {item.subText}
                            </Text>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    choiceItemWrapper: {
        marginTop: 20,
        marginLeft: -20,
        width: deviceWidth,
    },
    choiceItemWrapperInner: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    choiceItem: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        minWidth: 80,
        backgroundColor: '#FFB8A8',
        borderRadius: 4,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    choiceItemDate: {
        color: '#31426E',
        lineHeight: 14,
        fontSize: 10,
    },
    choiceItemMainText: {
        color: '#31426E',
        lineHeight: 22,
        fontSize: 16,
    },
});
