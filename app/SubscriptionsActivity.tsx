import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function SubscriptionsActivity() {
    const router = useRouter();

    const onPaymentButtonClick = () => {
        Alert.alert(
            'Payment',
            'Do you want to proceed to Payment?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Proceed',
                    onPress: () => router.push('/MainActivity') // Navigate to PaymentActivity
                }
            ]
        );
    };

    const [fontsLoaded, error] = useFonts({
        "Montserrat-Bold": require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
        "Poppins": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
    });

    useEffect(() => {
        if (fontsLoaded && !error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar style='auto' backgroundColor={colors.customColor} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/MainActivity')}>
                    <Ionicons
                        name='arrow-back-outline' size={35} color={colors.darkblue}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>SUBSCRIPTION</Text>
            </View>

            <View style={styles.container}>
                {/* Title Section */}
                <Text style={styles.title1}>Mentaura AI Premium Features</Text>

                {/* Scrollable Feature List */}
                <ScrollView style={styles.featureList}>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Personalized Expert Assistance:</Text> Gain access to AI-tuned field specialists who provide personalized guidance and support tailored to your specific career needs.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Dedicated Study Rooms:</Text> Join specialized study rooms where community members from your domain collaborate, discuss, and work on daily assessments in real-time.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Job applications:</Text> Access job portals where premium users receive AI-guided suggestions to apply for jobs matching their skills, along with personalized skill improvement advice.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Cross-Community Access:</Text> Enjoy the flexibility to join multiple communities across different domains, available exclusively for premium members.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Voice Calls:</Text> Connect with other users through voice calls, enhancing networking and collaboration opportunities.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Ad-Free Experience:</Text> Enjoy an uninterrupted experience with no ads, allowing you to focus on career growth.
                    </Text>
                    <Text style={styles.featureText}>
                        <Text style={styles.boldText}>• Individual Doubt Sessions with AI:</Text> Schedule one-on-one doubt clearing sessions with AI for targeted assistance and personalized learning.
                    </Text>
                </ScrollView>


                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={onPaymentButtonClick}>
                    <Text style={styles.buttonText}>Proceed to Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: colors.customColor
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        height: 50,
        backgroundColor: colors.customColor,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    backButton: {
        marginTop: -5,
        marginRight: 16,
    },
    title: {
        marginTop: -10.5,
        marginStart: 30,
        fontSize: 34,
        fontFamily: 'Roboto-Bold',
        color: colors.darkblue,
        textAlign: 'center'
    },
    title1: {
        fontSize: 22,
        textDecorationLine: 'underline',
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#000',
    },
    featureList: {
        flex: 1,
    },
    featureText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        marginBottom: 18,
        paddingHorizontal: 8,
        textAlign: 'justify'
    },
    boldText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginBottom: 18,
        paddingHorizontal: 8,
        textAlign: 'justify'
    },
    buttonContainer: {
        marginTop: 22,
        marginBottom: 16,
        width: '95%',
        height: 50,
        backgroundColor: colors.customColor,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    buttonText: {
        color: colors.black,
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

