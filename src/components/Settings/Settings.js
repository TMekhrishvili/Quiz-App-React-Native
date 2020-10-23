import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Difficulty from '../Difficulty';
import Category from '../Category';
const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.select}>
                <Difficulty />
            </View>
            <View style={styles.select}>
                <Category style={styles.select} />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 350
    },
    select: {
        width: 310,
        height: 50,
        color: '#fff',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: "#37ff00",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#000',
        paddingVertical: 10,
        fontWeight: 'bold',
        height: 50,
        justifyContent: 'center'

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})
export default Settings