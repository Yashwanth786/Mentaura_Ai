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

export default function careerpath() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Inter": require("../assets/fonts/Inter/static/Inter_28pt-Regular.ttf"),
    "Montserrat": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Lexend-Medium": require("../assets/fonts/Lexend/static/Lexend-Medium.ttf"),
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
      <StatusBar style='auto' backgroundColor={colors.lightblue} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>
          {/* Top image */}
          <Image source={require('../assets/images/dreamrole_1.png')} style={styles.topImage} />

          {/* Back button */}
          <TouchableOpacity style={styles.backcontainer}
            onPress={() => router.push('/HomePage')}>
            <Ionicons name='arrow-back-outline' size={35} color={colors.white} />
          </TouchableOpacity>

          {/* Background Image */}
          <Image source={require('../assets/images/dreamrole_2.png')} style={styles.loginImage} />

          <TouchableOpacity style={styles.home} onPress={() => router.push('/HomePage')}>
            <Ionicons name="home" size={31} color={colors.white} />
          </TouchableOpacity>

          {/* Loading Indicator */}
          {isLoading && (
            <ActivityIndicator size="large" color={colors.darkblue} style={styles.progressBar} />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.lightblue,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.lightblue,
  },
  topImage: {
    position: 'absolute',
    width: '80%',
    height: 180,
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
  home: {
    marginTop: -30,
    alignSelf: 'flex-end',
    marginEnd: 16
  },
  
  progressBar: {
    marginTop: 40,
    alignSelf: 'center'
  },
});

