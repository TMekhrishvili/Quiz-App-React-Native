import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SettingsContext } from '../../context/SettingsContext';
import RNPickerSelect from 'react-native-picker-select';

const options = [
    { label: "General", value: 9 },
    { label: "Books", value: 10 },
    { label: "Film", value: 11 },
    { label: "Music", value: 12 },
    { label: "Musicals", value: 13 },
    { label: "Video", value: 14 },
    { label: "Board", value: 15 },
    { label: "Natural", value: 16 },
    { label: "Computer", value: 17 },
    { label: "Mathematics", value: 18 },
    { label: "Mithology", value: 19 },
    { label: "Sports", value: 20 },
    { label: "Geography", value: 21 },
    { label: "Politics", value: 22 },
    { label: "Arts", value: 23 },
    { label: "Celebrities", value: 24 },
    { label: "Animal", value: 25 }
]


const Category = () => {
    const { category, setCategory } = useContext(SettingsContext);
    handleChange = (value) => {
        value != null && setCategory(value);
    }
    return (
        <RNPickerSelect
            onValueChange={handleChange}
            items={options}
            value={category}
        />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Category