import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';
import LottieView from 'lottie-react-native';
import Quiz from './Quiz';
import { myColors } from '../styles/myColors';

interface HomeProps { }

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Quiz</Text>
            <LottieView source={require('../assets/banner.json')} autoPlay loop style={styles.banner} />
            <TouchableOpacity onPress={() => navigation.navigate('RuleQuiz')} style={styles.btnContainer}>
                <LottieView source={require('../assets/btnstart.json')} autoPlay loop style={styles.btnstart} />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        width: 600,
        height: 400,
    },
    btnContainer: {
        width: 200,
        height: 100,
    },
    btnstart: {
        width: 200,
        height: 100,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: myColors.primary,
        textAlign: 'center',
    },
});

export default Home;