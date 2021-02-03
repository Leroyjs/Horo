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

import { Header } from '../Header';
import { Tabs } from '../UI/Tabs';
import { SelectCharacteristics } from '../SelectCharacteristics';
import { ZodiacSignList } from '../ZodiacSignList';
import { MainButton } from '../UI/MainButton';

export const CompatibilityConfigurationPage = ({ navigation }) => {
    const [genderFirst, setGenderFirst] = useState('Мужчина');
    const [zodiacSignIdFirst, setZodiacSignIdFirst] = useState(1);
    const [isActiveFirst, setActiveFirst] = useState(false);
    const changeGenderFirst = () => {
        if (genderFirst === 'Мужчина') {
            setGenderFirst('Женщина');
        }
        if (genderFirst === 'Женщина') {
            setGenderFirst('Мужчина');
        }
    };
    const handleActiveFirst = () => {
        setActiveFirst(!isActiveFirst);
    };
    const changeActiveZodiacFirst = (index) => {
        setZodiacSignIdFirst(index);
    };

    const [genderSecond, setGenderSecond] = useState('Женщина');
    const [zodiacSignIdSecond, setZodiacSignIdSecond] = useState(5);
    const [isActiveSecond, setActiveSecond] = useState(false);
    const changeGenderSecond = () => {
        if (genderSecond === 'Мужчина') {
            setGenderSecond('Женщина');
        }
        if (genderSecond === 'Женщина') {
            setGenderSecond('Мужчина');
        }
    };
    const handleActiveSecond = () => {
        setActiveSecond(!isActiveSecond);
    };
    const changeActiveZodiacSecond = (index) => {
        setZodiacSignIdSecond(index);
    };

    const goToCompatibility = () => {
        navigation.navigate('Compatibility');
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewInner}>
                <Header navigation={navigation} arrow={true}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Совместимость</Text>
                    </View>
                </Header>
                <Tabs tabsList={tabsList}></Tabs>
                <SelectCharacteristics
                    gender={genderFirst}
                    handleChangeGender={changeGenderFirst}
                    isActive={isActiveFirst}
                    handleActive={handleActiveFirst}
                    zodiacSign={zodiacSignList[zodiacSignIdFirst].title}
                ></SelectCharacteristics>
                {isActiveFirst && (
                    <ZodiacSignList
                        changeActiveZodiac={changeActiveZodiacFirst}
                        activeIndex={zodiacSignIdFirst}
                        zodiacSignList={zodiacSignList}
                    ></ZodiacSignList>
                )}
                <SelectCharacteristics
                    gender={genderSecond}
                    handleChangeGender={changeGenderSecond}
                    isActive={isActiveSecond}
                    handleActive={handleActiveSecond}
                    zodiacSign={zodiacSignList[zodiacSignIdSecond].title}
                ></SelectCharacteristics>
                {isActiveSecond && (
                    <ZodiacSignList
                        changeActiveZodiac={changeActiveZodiacSecond}
                        activeIndex={zodiacSignIdSecond}
                        zodiacSignList={zodiacSignList}
                    ></ZodiacSignList>
                )}
                <View style={styles.button}>
                    <MainButton
                        pressHandler={goToCompatibility}
                        text="Показать совместимость"
                    ></MainButton>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#31426E',
    },
    scrollViewInner: {
        paddingHorizontal: 20,
        paddingVertical: 46,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    headerTextWrapper: {
        justifyContent: 'center',
        height: 50,
    },
    button: {
        marginTop: 20,
    },
});
const tabsList = [{ title: 'Знаки' }, { title: 'Друзья' }, { title: 'Дата' }];
const zodiacSignList = [
    {
        img: require('../../../assets/zodiacSigns/Овен.png'),
        title: 'Овен',
    },
    {
        img: require('../../../assets/zodiacSigns/Телец.png'),
        title: 'Телец',
    },
    {
        img: require('../../../assets/zodiacSigns/Близнецы.png'),
        title: 'Близнецы',
    },
    {
        img: require('../../../assets/zodiacSigns/Рак.png'),
        title: 'Рак',
    },
    {
        img: require('../../../assets/zodiacSigns/Лев.png'),
        title: 'Лев',
    },
    {
        img: require('../../../assets/zodiacSigns/Дева.png'),
        title: 'Дева',
    },
    {
        img: require('../../../assets/zodiacSigns/Весы.png'),
        title: 'Весы',
    },
    {
        img: require('../../../assets/zodiacSigns/Скорпион.png'),
        title: 'Скорпион',
    },
    {
        img: require('../../../assets/zodiacSigns/Стрелец.png'),
        title: 'Стрелец',
    },
    {
        img: require('../../../assets/zodiacSigns/Козерог.png'),
        title: 'Козерог',
    },
    {
        img: require('../../../assets/zodiacSigns/Водолей.png'),
        title: 'Водолей',
    },
    {
        img: require('../../../assets/zodiacSigns/Рыбы.png'),
        title: 'Рыбы',
    },
];
