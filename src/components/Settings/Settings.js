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
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#8ff7d2",
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Settings