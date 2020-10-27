import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SettingsContext } from '../../context/SettingsContext';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Answer from './Answer';
import Result from './Result';

const Questions = ({ navigation }) => {
    useEffect(() => {
        fetchQuestions();
    }, [])

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const { score, setScore, category, difficulty, showCorrectAnswer, setShowCorrectAnswer } = useContext(SettingsContext);

    const fetchQuestions = () => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((response) => response.data && setQuestions(questions.concat(response.data.results)))
    }
    const handleClick = () => {
        setIndex(index + 1);
        setShowCorrectAnswer(false);
    }
    const shuffle = array => {
        const answers = array.incorrect_answers;
        answers.push(array.correct_answer)
        answers.sort(() => Math.random() - 0.5);
        return answers;
    }

    return (
        <View style={styles.container}>
            {index < 10 ? (
                questions.length > 0 ? (
                    <View>
                        <View style={styles.answersContainer}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.logo}
                                    source={{
                                        uri: 'https://images-na.ssl-images-amazon.com/images/I/711tEIU306L.png'
                                    }}
                                />
                            </View>
                            <View style={styles.questionContainer}>
                                <Text style={styles.question}>{questions[index].question}</Text>
                            </View>
                            <View style={styles.answerContainer}>
                                {shuffle(questions[index]).map((value, i) => {
                                    // styles
                                    const style = styles.showCorrect;
                                    const ifCorrect = value === questions[index].correct_answer;
                                    const styleAfterClick = ifCorrect ? { ...style, borderColor: '#34fa37' } : { ...style, borderColor: '#fa6534' }
                                    const defaultStyle = { ...style, borderColor: '#98fad6' }
                                    // return
                                    return (
                                        <Answer
                                            key={i}
                                            answer={value}
                                            correct={questions[index].correct_answer}
                                            customStyle={showCorrectAnswer ? styleAfterClick : defaultStyle}
                                        />
                                    )
                                })}
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.continue}
                                    onPress={handleClick}>
                                    <Text style={{ color: '#fff' }}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                        <Image
                            style={styles.loaderImage}
                            source={{
                                uri: 'https://www.hopatcongschools.org/lib/img/spinner.gif'
                            }}
                        />
                    )) : (
                    <Result />
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
    },
    answersContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 15
    },
    question: {
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    continue: {
        backgroundColor: '#000',
        fontWeight: 'bold',
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    answerContainer: {
        flex: 3
    },
    buttonContainer: {
        flex: 1
    },
    logo: {
        width: 70,
        height: 70
    },
    showCorrect: {
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        padding: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Questions