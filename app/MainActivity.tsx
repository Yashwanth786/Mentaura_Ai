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

export default function MainActivity() {
  const router = useRouter();

  const [fontsLoaded, error] = useFonts({
    "Montserrat": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>

          <View style={styles.header} >
            <Image source={require('../assets/images/mainactivity_1.jpg')} style={styles.topImage} />

            <View style={styles.menu} >
              <TouchableOpacity
                onPress={() => router.push('/HomePage')}>
                <Ionicons name='menu' size={35} color={colors.white} />
              </TouchableOpacity>
            </View>

            <Text style={styles.header_text_user} >Hi, User!</Text>

            <Text style={styles.header_text_community} >Preferred role</Text>
            
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push('/MainActivity')}>
            <LinearGradient
              colors={['#1398C2', '#09485C']}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Text style={styles.buttonText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Bottom Image */}
          <Image source={require('../assets/images/careerpath.jpg')} style={styles.bottomImage} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.customColor
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.darkblue,
  },
  header:{
    height: 300,
    backgroundColor: colors.customColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  topImage: {
    position: 'absolute',
    width: 200,
    height: 200,
    marginTop: 85,
    alignSelf: 'center'
  },
  menu: {
    width: 50,
    height: 50, 
    borderRadius: 25,
    backgroundColor: colors.colorPrimary,
    marginStart: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header_text_user: {
    fontFamily: 'Poppins',
    fontSize: 22,
    marginTop: -41.5,
    marginStart: 90
  },
  header_text_community: {
    fontFamily: 'Poppins',
    fontSize: 22,
    marginTop: 5,
    alignSelf: 'center'
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 52,
    marginBottom: 16
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
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  bottomImage: {
    marginTop: 44,
    marginStart: 34,
    width: 150,
    height: 200,
    opacity: 0.6
  },
});

