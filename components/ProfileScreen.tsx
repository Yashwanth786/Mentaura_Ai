// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import colors from '../assets/colors';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' backgroundColor={colors.customColor} />
            <View style={styles.content}>
                <Text style={styles.text}>This is the Profile Screen.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customColor,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: '#fff',
    }
});
