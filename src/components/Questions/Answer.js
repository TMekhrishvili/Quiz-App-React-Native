import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsContext } from '../../context/SettingsContext';

const Answer = ({ answer, correct, customStyle }) => {
    const { score, setScore, showCorrectAnswer, setShowCorrectAnswer } = useContext(SettingsContext);
    let ans = answer;
    const handleClick = () => {
        ans = null;
        setShowCorrectAnswer(true);
        if (answer === correct) {
            setScore(score + 1);
        }
    }

    return (
        <View>
            <TouchableOpacity style={customStyle} onPress={handleClick}>
                <Text>{ans}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Answer