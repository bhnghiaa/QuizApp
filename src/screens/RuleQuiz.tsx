import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { myColors } from '../styles/myColors';



const RuleQuiz = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container}
            source={require('../assets/bgr_1.png')}>
            <View style={styles.boxContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Some Rules of this Quiz</Text>
                </View>
                <View style={styles.ruleContainer}>
                    <Text style={styles.ruleText}>1. You will have only 15 seconds per each question.</Text>
                    <Text style={styles.ruleText}>2. Once you select your answer, it can't be undone.</Text>
                    <Text style={styles.ruleText}>3. You can't select any option once time goes off.</Text>
                    <Text style={styles.ruleText}>4. You can't exit from the Quiz while you're playing.</Text>
                    <Text style={styles.ruleText}>5. You'll get points on the basis of your correct answer</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnContainer}  >
                        <Text style={styles.btnText}>Exit Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.btnHome}  >
                        <Text style={styles.btnHomeText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default RuleQuiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColors.primary,
    },
    boxContainer: {
        backgroundColor: myColors.white,
        width: "80%",
        height: '53%',
        borderRadius: 20,

    },
    headerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: myColors.primary,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myColors.count,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    ruleContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: myColors.primary,
        gap: 15,
    },
    ruleText: {
        color: myColors.count,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
    },
    bottom: {
        paddingVertical: 18,
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
        backgroundColor: myColors.bgr,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnHomeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: myColors.header,
        textAlign: 'center',
    }
});
