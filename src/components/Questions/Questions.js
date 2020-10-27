import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { SettingsContext } from '../../context/SettingsContext';
import Question from './Question';
import axios from 'axios';

const Questions = () => {
    useEffect(() => {
        fetchQuestions();
    }, [])

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const { category, difficulty } = useContext(SettingsContext);

    const fetchQuestions = () => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((response) => response.data && setQuestions(questions.concat(response.data.results)))
    }

    const shuffle = array => {
        const answers = array.incorrect_answers;
        answers.push(array.correct_answer)
        answers.sort(() => Math.random() - 0.5);
        return answers;
    }
    return (
        <View style={styles.container}>
            {questions.length > 0 ? (
                <View>
                    <Text>{questions[index].question}</Text>
                    {shuffle(questions[index]).map((ans, i) => (
                        <Text key={i}>{ans}</Text>
                    ))}
                    <Button onPress={() => { setIndex(index + 1) }} title="continue" />
                </View>
            ) : (
                    <Image
                        style={styles.loaderImage}
                        source={{
                            uri: 'https://www.hopatcongschools.org/lib/img/spinner.gif'
                        }}
                    />

                )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdfffb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loaderImage: {
        width: 100,
        height: 100
    }
});
export default Questions