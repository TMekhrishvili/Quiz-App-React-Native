import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsContext } from '../../context/SettingsContext';

const Answer = ({ answer, correct, customStyle }) => {
    const { score, setScore, showCorrectAnswer, setShowCorrectAnswer } = useContext(SettingsContext);

    const handleClick = () => {
        if (answer === correct && !showCorrectAnswer) {
            setScore(score + 1);
        }
        setShowCorrectAnswer(true);
    }

    return (
        <View>
            <TouchableOpacity style={customStyle} onPress={handleClick}>
                <Text>{answer}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Answer