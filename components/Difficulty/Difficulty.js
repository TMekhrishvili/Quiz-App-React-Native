import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import SwitchSelector from "react-native-switch-selector";
import { SettingsContext } from '../../context/SettingsContext';

const options = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
];
const Difficulty = () => {
    const { difficulty, setDifficulty } = useContext(SettingsContext);
    handleChange = (value) => {
        setDifficulty(value)
    }
    return (
        <View style={styles.container}>
            <SwitchSelector
                initial={0}
                onPress={value => setDifficulty(value)}
                hasPadding
                options={options}                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        alignItems: "center"
    }
});
export default Difficulty
