import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import colors from '../assets/colors';


export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/EntryPage');
        }, 2000); // 2-second splash screen delay

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);


    return (
        
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar style='auto' backgroundColor={colors.ldarkblue} />
            <ImageBackground
                source={require('../assets/images/splash_screen.png')}
                style={styles.background} >
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: colors.ldarkblue, // Ensure the background color is applied
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

});
