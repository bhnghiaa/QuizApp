import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import Quiz from './Quiz';
import { myColors } from '../styles/myColors';

interface HomeProps { }

const Home = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container}
            source={require('../assets/background.png')}>
            <Text style={styles.header}>Quiz</Text>
            <LottieView source={require('../assets/banner.json')} autoPlay loop style={styles.banner} />
            <TouchableOpacity onPress={() => navigation.navigate('RuleQuiz')} style={styles.btnContainer}>
                <LottieView source={require('../assets/btnstart.json')} autoPlay loop style={styles.btnstart} />
            </TouchableOpacity>
        </ImageBackground>
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
        color: myColors.header,
        textAlign: 'center',
    },
});

export default Home;
