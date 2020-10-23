import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Settings from '../Settings/Settings';

const Home = () => {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://images-na.ssl-images-amazon.com/images/I/711tEIU306L.png'
                    }}
                />
            </View>
            <View style={styles.formContainer}>
                <Settings />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {

    },
    logo: {
        width: 200,
        height: 200
    }
})
export default Home