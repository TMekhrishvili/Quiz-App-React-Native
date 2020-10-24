import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SettingsContext } from '../../context/SettingsContext';
import RNPickerSelect from 'react-native-picker-select';

const options = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
];
const Difficulty = () => {
    const { difficulty, setDifficulty } = useContext(SettingsContext);
    const handleChange = (value) => {
        value != null && setDifficulty(value)
    }
    return (
        <RNPickerSelect
            onValueChange={handleChange}
            items={options}
            value={difficulty}
        />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});
export default Difficulty
