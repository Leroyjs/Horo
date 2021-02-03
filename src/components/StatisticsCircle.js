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
import Svg, { Circle } from 'react-native-svg';

export const StatisticsCircle = ({ percent }) => {
    const [percentValue, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let value;
            setPercent((prevValue) => {
                value = prevValue + 1;
                return value;
            });
            if (percent <= value) {
                clearInterval(interval);
            }
        }, 2);
    }, []);

    return (
        <View style={styles.svgWrapper}>
            <Text style={styles.svgText}>{percentValue + '%'}</Text>
            <Svg width="66" height="66" viewBox={[0, 0, 66, 66]}>
                <Circle
                    cx="33"
                    cy="33"
                    r="32"
                    stroke="white"
                    strokeOpacity="0.2"
                />
                <Circle
                    cx="33"
                    cy="33"
                    r="32"
                    stroke="#FFB8A8"
                    strokeWidth="2"
                    strokeDasharray={`${percentValue * 2.1} 210`}
                />
            </Svg>
        </View>
    );
};
const styles = StyleSheet.create({
    svgWrapper: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgText: {
        color: '#FFFFFF',
        fontSize: 14,
        position: 'absolute',
    },
});
