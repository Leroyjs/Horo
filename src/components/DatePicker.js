import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export const DatePicker = ({ handleDate }) => {
    const scrollRefDay = useRef();
    const scrollRefMonth = useRef();
    const scrollRefYear = useRef();

    const [day, setDay] = useState(new Date().getDay());
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => {
        return 32 - new Date(year, month, 32).getDate();
    };
    const changeYear = (contentOffset) => {
        const yearNew =
            new Date().getFullYear() - Math.round(contentOffset / 32);
        if (yearNew !== year) {
            setYear(yearNew);
            dateCollector(day, month, yearNew);
        }
    };
    const changeMonth = (contentOffset) => {
        const monthNew = Math.round(contentOffset / 32);
        if (monthNew !== month) {
            setMonth(monthNew);
            dateCollector(day, monthNew, year);
        }
    };
    const changeDay = (contentOffset) => {
        const dayNew = Math.round(contentOffset / 32) + 1;
        if (dayNew !== day) {
            setDay(dayNew);
            dateCollector(dayNew, month, year);
        }
    };

    let dayArray = [];
    const yearArray = [];
    const monthArray = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    (function initDays() {
        dayArray = [];
        for (let i = 1; i <= getDaysInMonth(month, year); i++) {
            dayArray.push(i);
        }
    })();
    (function initYears() {
        for (let i = new Date().getFullYear(); i >= 1900; i--) {
            yearArray.push(i);
        }
    })();

    useEffect(() => {
        setTimeout(() => {
            scrollRefDay.current.scrollTo({
                y: 32 * (day - 1),
                animated: false,
            });
            scrollRefMonth.current.scrollTo({
                y: 32 * month,
                animated: false,
            });
            scrollRefYear.current.scrollTo({
                y: 32 * 20,
                animated: false,
            });
        }, 50);
    }, []);

    const dateCollector = (day, month, year) => {
        const date = { day, month: month + 1, year };
        handleDate(date);
    };

    return (
        <View style={styles.dateWrapper}>
            <ScrollView
                ref={scrollRefDay}
                onScroll={(e) => changeDay(e.nativeEvent.contentOffset.y)}
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
                contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={0}
            >
                {dayArray.map((item) => (
                    <View key={item} style={styles.dateTextWrapper}>
                        <Text style={styles.dateText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
            <ScrollView
                ref={scrollRefMonth}
                onScroll={(e) => changeMonth(e.nativeEvent.contentOffset.y)}
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
                contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={0}
            >
                {monthArray.map((item) => (
                    <View key={item} style={styles.dateTextWrapper}>
                        <Text style={styles.dateText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
            <ScrollView
                ref={scrollRefYear}
                onScroll={(e) => changeYear(e.nativeEvent.contentOffset.y)}
                showsVerticalScrollIndicator={false}
                snapToInterval={32}
                contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={0}
            >
                {yearArray.map((item) => (
                    <View key={item} style={styles.dateTextWrapper}>
                        <Text style={styles.dateText}>{item}</Text>
                    </View>
                ))}
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
    contentContainer: {
        paddingVertical: 32,
    },
});
