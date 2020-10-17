import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Difficulty from '../Difficulty';
import Category from '../Category';
import AppHeader from '../Header/Header';

const Home = () => {
    return (
        <>
            <AppHeader />
            <Difficulty />
            <Category />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#566551'
    }
})
export default Home