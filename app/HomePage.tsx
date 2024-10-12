import React, { useEffect} from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function HomePage() {
  const router = useRouter();

  const [fontsLoaded, error] = useFonts({
    "Montserrat": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Manrope-Extrabold": require("../assets/fonts/Manrope/static/Manrope-ExtraBold.ttf"),
    "Archivo": require("../assets/fonts/Archivo/static/Archivo-Regular.ttf")
  });

  useEffect(() => {
    if (fontsLoaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // Return null if fonts are not yet loaded
  }


  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style='auto' backgroundColor={colors.darkblue} />
      <ScrollView contentContainerStyle={styles.container}>
        
        <Image source={require('../assets/images/home_1.png')} style={styles.home1} />

        <Image source={require('../assets/images/home_2.png')} style={styles.home2} />

        <Image source={require('../assets/images/home_4.png')} style={styles.home4} />

        <Image source={require('../assets/images/home_3.png')} style={styles.home3} />

        <Text style={styles.text}>Hello,{"\n"}what would you prefer to choose?</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/DreamRole')}>
          <Text style={styles.textbutton}>Attain Your Dream Role{"\n"}with our Assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/CareerPath')}>
          <Text style={styles.textbutton}>Discover Your{"\n"}Career Path with us</Text>
        </TouchableOpacity>

        <Image source={require('../assets/images/home_5.png')} style={styles.home5} />

        <Image source={require('../assets/images/home_6.png')} style={styles.home6} />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push('/Register')}>
          <LinearGradient
            colors={['#1398C2', '#09485C']}
            start={{ x: 0, y: 0 }} // Starting point (left)
            end={{ x: 1, y: 0 }} // Ending point (right)
            style={styles.gradient}>
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.darkblue, // Ensure the background color is applied
  },
  container: {
    flexGrow: 1,
  },
  home1: {
    marginStart: 30,
    marginTop: 52,
    aspectRatio: 1
  },
  home2: {
    marginStart: 44,
    marginTop: -34,
  },
  home3: {
    marginTop: -650,
    opacity: 0.49
  },
  home4: {
    alignSelf: 'flex-end',
    marginTop: -50,
    marginEnd: -80,
    opacity: 0.71
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Manrope-Extrabold',
    fontSize: 20,
    color: colors.white,
    marginTop: -330
  },
  button: {
    width: '80%',
    height: 70,
    backgroundColor: '#D9D9D9',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 32
  },
  textbutton: {
    fontFamily: 'Archivo',
    fontSize: 19, 
    color: colors.darkblue,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: -252,
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
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  home5: {

  },
  home6: {
    alignSelf: 'flex-end',
    marginTop: -200
  }
});

