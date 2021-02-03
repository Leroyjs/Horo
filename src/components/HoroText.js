import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Advertising } from './UI/Advertising';

export const HoroText = ({ content }) => {
    return (
        <View style={styles.horoTextWrapper}>
            {content.map((item) =>
                item.type === 'text' ? (
                    <Text key={item.content} style={styles.horoText}>
                        {item.content}
                    </Text>
                ) : (
                    <Advertising key={item.img} data={item}></Advertising>
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    horoText: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 20,
        marginVertical: 20,
    },
    horoTextWrapper: {
        marginTop: 20,
    },
});
