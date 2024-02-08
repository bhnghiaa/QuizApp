import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { myColors } from '../styles/myColors';
import { questions } from '../question';
import Ionicons from '../CustomIcon';

const width = Dimensions.get('window').width;
const Quiz = ({ navigation }) => {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ point, setPoint ] = useState(0);
    const [ selected, setSelected ] = useState(null);
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ answered, setAnswerd ] = useState(false);
    const [ count, setCount ] = useState(10);

    let interval = null;

    useEffect(() => {
        if (selected !== null && answered) {
            { (questions[ currentQuestion ]?.answers[ selected ].correct) && setPoint(point + 1); }
        }
    }, [ selected ]);

    useEffect(() => {
        const myInterval = () => {
            if (count >= 1) {
                setCount(count - 1);
            }
            if (count == 0) {
                setSelected(questions[ currentQuestion ]?.correctAnswer);
                setIsCorrect(true);
                setAnswerd(true);
                console.log(selected);
            }
        }
        if (!answered) {
            interval = setTimeout(myInterval, 1000);
        }
        return () => clearTimeout(interval);
    }, [ count ]);

    const handleAnswer = (answer: { answer: string; correct: boolean; }, index: number) => {
        if (!answered) {
            setIsCorrect(answer.correct);
            setSelected(index);
            setAnswerd(true);
            setCount(0);
        }
    }
    const nextQues = () => {
        setAnswerd(false);
        setCount(10);
        if (selected !== null) {
            { currentQuestion < questions.length - 1 ? setCurrentQuestion(currentQuestion + 1) : navigation.navigate('Result', { point: point }) }
        }
        setSelected(null);
    }
    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <View style={styles.timeleft}>
                    <Text style={styles.count}>{count}</Text>
                </View>
                {currentQuestion < questions.length && (
                    <Text style={styles.questionText}>{questions[ currentQuestion ]?.question}</Text>
                )}
            </View>
            <View style={styles.answerContainer}>
                {questions[ currentQuestion ]?.answers.map((answer, index) => {

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnswer(answer, index)}
                            style={isCorrect && selected == index ? styles.answerCorrect : !isCorrect && selected == index ? styles.answerWrong : (!isCorrect && selected !== null) && answer.correct ? styles.answerCorrect : styles.answer}
                            disabled={answered}
                        >
                            <Text
                                style={isCorrect && selected == index ? styles.answerTextCorrect : !isCorrect && selected == index ? styles.answerTextCorrect : (!isCorrect && selected !== null) && answer.correct ? styles.answerTextCorrect : styles.answerText}
                            >{answer.answer}
                            </Text>
                            <Ionicons name={(selected == index) ? 'check-circle-fill' : 'circle'} size={25} color={(selected == index) ? myColors.white : myColors.primary} />
                        </TouchableOpacity>
                    );
                }
                )}
            </View>
            <View style={styles.bottom}>
                <Text style={styles.answerTextCorrect}>{currentQuestion + 1} of {questions.length} questions</Text>
                {(answered || count == 0) && (
                    <TouchableOpacity style={styles.btnContainer} onPress={() => nextQues()}>
                        <Text style={styles.btnText} >{currentQuestion < questions.length - 1 ? "Next" : "Finish"}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        backgroundColor: myColors.primary,
    },
    questionContainer: {
        position: 'relative',
        backgroundColor: myColors.bgr,
        width: 0.8 * width,
        height: '20%',
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',

    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.primary,
        textAlign: 'center',
    },
    answerContainer: {
        borderRadius: 20,
        width: "80%",
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    answer: {
        width: "100%",
        height: '15%',
        backgroundColor: myColors.white,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
    },
    answerCorrect: {
        width: "100%",
        height: '14%',
        backgroundColor: myColors.answerCorrect,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
    },
    answerWrong: {
        width: "100%",
        height: '14%',
        backgroundColor: myColors.answerWrong,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
    },
    answerText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: myColors.primary,
        textAlign: 'center',
    },
    answerTextCorrect: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: myColors.white,
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: myColors.white,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.primary,
        textAlign: 'center',
    },
    timeleft: {
        position: 'absolute',
        top: "-50%",
        left: "50%",
        transform: [ { translateX: -35 }, { translateY: 50 } ],
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: myColors.timeleft,
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        color: myColors.count,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottom: {
        flexDirection: 'row',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Quiz;