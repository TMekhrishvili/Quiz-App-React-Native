import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsContext } from '../../context/SettingsContext';
import { useNavigation } from '@react-navigation/native';

const Result = () => {
    const { score } = useContext(SettingsContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://images-na.ssl-images-amazon.com/images/I/711tEIU306L.png'
                    }}
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.score}>Your score: {score}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={{ color: '#525252', fontSize: 18 }}>Try again...</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultContainer: {
        flex: 2,
        alignItems: 'center'
    },
    logo: {
        width: 70,
        height: 70
    },
    score: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20
    }
})
export default Result