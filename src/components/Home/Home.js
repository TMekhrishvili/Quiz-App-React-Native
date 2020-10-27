import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Settings from '../Settings/Settings';
import { SettingsContext } from '../../context/SettingsContext';

const Home = ({ navigation }) => {

    useEffect(() => {
        setScore(0)
    }, [])
    
    const { score, setScore } = useContext(SettingsContext);
    return (
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdfffb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    buttonContainer: {
        backgroundColor: '#000',
        paddingVertical: 10,
        fontWeight: 'bold',
        height: 50,
        justifyContent: 'center',
        width: 310,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})
export default Home