import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../assets/colors';
import { LinearGradient } from 'expo-linear-gradient';

// Define the type for the route object
interface RouteParams {
    params: {
        email: string;
    };
}

export default function OTP({ route }: { route: RouteParams }) {
    const { email } = route.params;
    const router = useRouter();
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const verifyOTP = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:3000/verify?email=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ otp })
            });

            const result = await response.text();

            if (response.ok && result.includes('Account successfully created')) {
                setIsLoading(false);
                ToastAndroid.show('OTP Verified. Welcome!', ToastAndroid.SHORT);
                router.push('/HomePage');
            } else {
                setIsLoading(false);
                ToastAndroid.show('Invalid OTP. Please try again.', ToastAndroid.SHORT);
            }
        } catch (error) {
            setIsLoading(false);
            ToastAndroid.show('Error occurred. Please try again.', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter the OTP sent to {email}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                placeholderTextColor="#61758A"
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={verifyOTP}>
                <LinearGradient
                    colors={['#1398C2', '#09485C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </LinearGradient>
            </TouchableOpacity>

            {isLoading && <ActivityIndicator size="large" color={colors.darkblue} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lexend-Medium',
        color: '#09485C',
        marginBottom: 30,
        textAlign: 'center',
    },
    textInput: {
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#000',
        width: '100%',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
    gradient: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Lexend-Medium',
    },
});
