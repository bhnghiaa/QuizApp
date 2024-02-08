import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { questions } from '../question';
import { myColors } from '../styles/myColors';

const Result = ({ navigation, route }) => {
    const { point } = route.params;
    console.log({ point });
    return (
        <View style={styles.container}>
            <Text style={styles.header}>You've completed the Quiz!</Text>
            <Text style={styles.result}>You got {point} out of {questions.length}</Text>
            <Image style={styles.img}
                source={require('../assets/result.png')}
            />
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => navigation.navigate('RuleQuiz')} style={styles.btnContainer}  >
                    <Text style={styles.btnText}>Replay Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnHome}  >
                    <Text style={styles.btnHomeText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    img: {
        width: 300,
        height: 300,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: myColors.primary,
        width: "90%",
        textAlign: 'center',
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.count,
        width: "90%",
        textAlign: 'center',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.white,
        textAlign: 'center',
    },
    bottom: {
        flexDirection: 'row',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        backgroundColor: myColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnHome: {
        backgroundColor: myColors.white,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnHomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.primary,
        textAlign: 'center',
    }
});

export default Result;