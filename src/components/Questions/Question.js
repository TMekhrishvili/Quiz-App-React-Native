import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../../context/SettingsContext';


const Question = ({ ans, correct }) => {
    const [score, setScore] = useContext(SettingsContext);

    return (
        <View>
            <Text>ans</Text>
        </View>
    )
}

export default Question