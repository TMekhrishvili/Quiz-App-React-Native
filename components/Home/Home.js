import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Difficulty from '../Difficulty';
import AppHeader from '../Header/Header';

const Home = () => {
    return (
        <View>
            <View style={{}}>
                <AppHeader />
            </View>
            <View style={{}}>
                <Difficulty />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#47594c',
    }
})
export default Home