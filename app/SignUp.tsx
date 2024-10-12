import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function SignUp() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    // Function to validate email format using regex
    const validateEmail = (input: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(input));
        setEmail(input);
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [fontsLoaded, error] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Inter": require("../assets/fonts/Inter/static/Inter_28pt-Regular.ttf"),
        "Montserrat": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        "Lexend-Medium": require("../assets/fonts/Lexend/static/Lexend-Medium.ttf")
    });

    useEffect(() => {
        if (fontsLoaded && !error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            ToastAndroid.show('Please fill all fields and enter a valid email.', ToastAndroid.SHORT);
            return;
        }
        if (!isValidEmail) {
            ToastAndroid.show('Please enter a valid email.', ToastAndroid.SHORT);
            return;
        }
        router.push('/HomePage');
        
        setIsLoading(true);

    };

    if (!fontsLoaded) {
        return null; // Return null if fonts are not yet loaded
    }


    return (
        <SafeAreaView style = {styles.safeContainer}>
            <StatusBar style='auto' backgroundColor={colors.ldarkblue} />
            <ScrollView contentContainerStyle={styles.container}>
                {/* Top image */}
                <Image source={require('../assets/images/signup_1.png')} style={styles.signupImage} />

                {/* Back button */}
                <TouchableOpacity style={styles.backcontainer}
                    onPress={() => router.push('/EntryPage')}>
                    <Ionicons name='arrow-back-outline' size={35} color = {colors.white} />
                </TouchableOpacity>

                {/* Background Image */}
                <Image source={require('../assets/images/login_1.png')} style={styles.loginImage} />

                {/* Outer Design */}
                <View style={styles.outerWrapper}>
                    <Image source={require('../assets/images/entry_outer.png')} style={styles.outer1} />
                    <Image source={require('../assets/images/entry_outer2.png')} style={styles.outer2} />
                    <Image source={require('../assets/images/entry_outer3.png')} style={styles.outer3} />
                </View>

                {/* Texts */}
                <Text style={styles.welcomeText}>Welcome To</Text>
                <Text style={styles.mentorText}>Mentaura.ai</Text>

                {/* Name Input */}
                <Text style={styles.inputLabel}>Name</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color={colors.ldarkblue} style={styles.iconStyle} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Name"
                        placeholderTextColor="#61758A"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Email Input */}
                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={24} color={colors.ldarkblue} style={styles.iconStyle} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Email Id"
                        value={email}
                        onChangeText={validateEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#61758A"
                    />
                    <Ionicons name="checkmark-circle" size={24} color={isValidEmail ? 'green' : colors.ldarkblue} style={styles.iconStyle2} />
                </View>

                {/* Password Input */}
                <Text style={styles.inputLabel}>New Password</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={24} color={colors.ldarkblue} style={styles.iconStyle} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Password"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#61758A"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={passwordVisible ? "eye" : "eye-off"} size={24} color={colors.ldarkblue} style={styles.iconStyle2}
                        />
                    </TouchableOpacity>
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSignUp}>
                    <LinearGradient
                        colors={['#1398C2', '#09485C']}
                        start={{ x: 0, y: 0 }} // Starting point (left)
                        end={{ x: 1, y: 0 }} // Ending point (right)
                        style={styles.gradient}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Loading Indicator */}
                {isLoading && (
                    <ActivityIndicator size="large" color={colors.darkblue} style={styles.progressBar} />
                )}

                {/* Bottom Image */}
                <Image source={require('../assets/images/base_for_login_and_register.png')} style={styles.bottomImage} />
                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: colors.ldarkblue, // Ensure the background color is applied
    },
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    signupImage: {
        position: 'absolute',
        marginTop: -5,
        alignSelf: 'center'
    },
    backcontainer: {
        marginTop: 25,
        marginStart: 16
    },
    loginImage: {
        position: 'absolute',
        marginTop: 100,
    },
    outerWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    outer1: {
        marginTop: 130,
        marginLeft: 28,
    },
    outer2: {
        marginTop: -92,
        marginLeft: 41,
    },
    outer3: {
        marginTop: -70,
        marginLeft: 50,
    },
    welcomeText: {
        marginTop: -75,
        marginStart: 150,
        fontFamily: 'Roboto-Medium',
        color: colors.white,
        fontSize: 28,
    },
    mentorText: {
        marginTop: 0,
        marginLeft: 150,
        fontFamily: 'Roboto-Medium',
        color: colors.white,
        fontSize: 40,
    },
    inputLabel: {
        marginTop: 30,
        marginStart: 30,
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize: 17,
    },
    inputContainer: {
        width: '90%',
        height: 55,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 10
    },
    iconStyle: {
        marginRight: 0
    },
    iconStyle2: {
        marginLeft: 12
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: "Lexend-Medium",
        color: colors.black,
        paddingLeft: 10,
    },
    buttonContainer: {
        marginTop: 52,
        width: '90%',
        height: 50,
        alignSelf: 'center',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Montserrat',
    },
    progressBar: {
        marginTop: 40,
        alignSelf: 'center'
    },
    bottomImage: {
        marginTop: 40,
        aspectRatio: 2.15,
    },
});

