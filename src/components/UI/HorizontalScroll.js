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

export const HorizontalScroll = ({ choiceItems = [], activeItemId = 0 }) => {
    return (
        <ScrollView style={styles.choiceItemWrapper} horizontal={true}>
            <View style={styles.choiceItemWrapperInner}>
                {choiceItems.map((item, index) => (
                    <TouchableOpacity
                        key={item.mainText + item.subText}
                        style={
                            index === activeItemId
                                ? styles.choiceItem
                                : {
                                      ...styles.choiceItem,
                                      ...styles.choiceItemActive,
                                  }
                        }
                        onPress={item.handle}
                    >
                        <Text
                            style={
                                index === activeItemId
                                    ? styles.choiceItemMainText
                                    : {
                                          ...styles.choiceItemMainText,
                                          ...styles.choiceItemMainTextActive,
                                      }
                            }
                        >
                            {item.mainText}
                        </Text>
                        {item.subText && (
                            <Text
                                style={
                                    index === activeItemId
                                        ? styles.choiceItemDate
                                        : {
                                              ...styles.choiceItemDate,
                                              ...styles.choiceItemMainTextActive,
                                          }
                                }
                            >
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
    choiceItemActive: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    choiceItemMainTextActive: {
        color: 'rgba(255, 255, 255, 0.4)',
    },
});
