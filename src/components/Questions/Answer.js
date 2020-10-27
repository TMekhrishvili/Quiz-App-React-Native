import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsContext } from '../../context/SettingsContext';

const Answer = ({ answer, correct, customStyle }) => {
    const { score, setScore, setShowCorrectAnswer } = useContext(SettingsContext);

    const handleClick = () => {
        setShowCorrectAnswer(true);
        if (answer === correct) {
            setScore(score + 1);
        }
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