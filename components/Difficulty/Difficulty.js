import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import { SettingsContext } from '../../context/SettingsContext';
const difficultyArray = [
    "easy",
    "medium",
    "hard"
];
const Difficulty = () => {
    const { difficulty, setDifficulty } = useContext(SettingsContext);
    handleChange = (value) => {
        setDifficulty(value)
    }
    return (
        <View style={styles.container}>
            <RadioButton.Group onValueChange={handleChange} value={difficulty}>
                {
                    difficultyArray.map((item, index) => (
                        <View key={index}>
                            <Text>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                            <RadioButton value={item} />
                        </View>
                    ))
                }
            </RadioButton.Group>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: "center"
    }
});
export default Difficulty
