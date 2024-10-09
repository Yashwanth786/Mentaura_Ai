import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, BackHandler, ToastAndroid } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';

SplashScreen.preventAutoHideAsync();

export default function EntryPage() {
  const router = useRouter();
  const [exitApp, setExitApp] = useState(false);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Inter": require("../assets/fonts/Inter/static/Inter_28pt-Regular.ttf")
  });

  useEffect(() => {
    if (fontsLoaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    const backAction = () => {
      // Check if user has already pressed back once
      if (exitApp) {
        BackHandler.exitApp(); // Exit the app
      } else {
        // Show a toast message and set the exitApp flag
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        setExitApp(true);
        setTimeout(() => setExitApp(false), 2000); // Reset after 2 seconds
      }
      return true; // Prevent default back action
    };

    // Add back button listener
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Cleanup the listener
    return () => backHandler.remove();
  }, [exitApp]);

  if (!fontsLoaded) {
    return null; // Return null if fonts are not yet loaded
  }
  

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style = 'auto' backgroundColor = {colors.ldarkblue} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>

          <Image
            source={require('../assets/images/entrypage1.jpg')}
            style={styles.backgroundImage}
          />

          {/* Main Logo Image */}
          <Image
            source={require('../assets/images/entry_page_1.png')}
            style={styles.mainLogo}
          />

          <View style={styles.main_outer}>
            <View>
              <Image source={require('../assets/images/entry_outer.png')} />
            </View>
            <View style={styles.outer2}>
              <Image source={require('../assets/images/entry_outer2.png')} />
            </View>
            <View style={styles.outer3}>
              <Image source={require('../assets/images/entry_outer3.png')} />
            </View>
          </View>

          {/* Text */}
          <Text style={styles.text1}>Hey there!</Text>
          <Text style={styles.text2}>Mentaura.ai</Text>
          <Text style={styles.text3}>Elevate your career with AI Guru..!</Text>

          {/* Log in Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push('/CareerPath')}>
            <LinearGradient
              colors={['#1398C2', '#09485C']}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Text style={styles.buttonText}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Sign up Text */}
          <Text style={styles.text4}>Don’t have an account?</Text>

          {/* Sign up Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push('/SignUp')}>
            <LinearGradient
              colors={['#1398C2', '#09485C']}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Text style={styles.buttonText}>Sign up</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Google Sign Up */}
          <TouchableOpacity>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.googleIcon}
            />
          </TouchableOpacity>

          {/* Bottom Image */}
          <Image
            source={require('../assets/images/entry_4.png')}
            style={styles.bottomImage}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.darkblue, // Ensure the background color is applied
  },
  container: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.darkblue,
  },
  backgroundImage: {
    width: 466,
    height: 566,
    position: 'absolute',
    top: -80,
    start: -10,
    opacity: 0.15,
  },
  mainLogo: {
    position: 'absolute',
    marginTop: 240,
  },
  main_outer: {
    flex: 1,
    justifyContent: 'center',
    start: 38,
    top: 79,
  },
  outer2: {
    top: -92,
    start: 13,
  },
  outer3: {
    top: -163,
    start: 23,
  },
  text1: {
    marginTop: -60,
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Roboto',
    marginStart: 44,
  },
  text2: {
    marginTop: -2,
    marginStart: 44,
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  text3: {
    marginTop: 80,
    fontSize: 20,
    color: '#1C2A3A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    width: 183,
    height: 50,
    alignSelf: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  text4: {
    marginTop: 45,
    fontSize: 16,
    color: '#1C2A3A',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  googleIcon: {
    width: 55,
    height: 55,
    marginTop: 26,
    alignSelf: 'center',
  },
  bottomImage: {
    marginTop: 8,
  },
});
