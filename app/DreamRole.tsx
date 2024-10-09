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

export default function DreamRole() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [dreamRole, setDreamRole] = useState('');
  const [dreamCompany, setDreamCompany] = useState('');

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

  const handleSubmit = () => {
    if (dreamRole === '' || dreamCompany === '') {
      ToastAndroid.show('Please fill in all fields', ToastAndroid.SHORT); // Show toast if any field is empty
    } else {
      // If both fields are filled, navigate to MainActivity
      router.push('/MainActivity');
    }
  };


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

          <View style={styles.container1}>
            {/* Dream role */}
            <Text style={styles.text1} >Dream Role</Text>
            <Ionicons name="id-card" size={24} color={colors.darkblue} style={styles.iconStyle1} />
            <View style={styles.inputContainer1}>
              <TextInput
                style={styles.textInput1}
                placeholder="What's your dream role?"
                placeholderTextColor={colors.white}
                value={dreamRole}
                onChangeText={setDreamRole}
              />
            </View>

            {/* Dream company */}
            <Text style={styles.text2} >Dream Comapny</Text>
            <Ionicons name="business" size={24} color={colors.darkblue} style={styles.iconStyle2} />
            <View style={styles.inputContainer1}>
              <TextInput
                style={styles.textInput1}
                placeholder="What's your dream company?"
                placeholderTextColor={colors.white}
                value={dreamCompany}
                onChangeText={setDreamCompany}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}>
              <LinearGradient
                colors={['#1398C2', '#09485C']}
                start={{ x: 0, y: 0 }} // Starting point (left)
                end={{ x: 1, y: 0 }} // Ending point (right)
                style={styles.gradient}>
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>

          {/* Loading Indicator */}
          {isLoading && (
            <ActivityIndicator size="large" color={colors.darkblue} style={styles.progressBar} />
          )}

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
    marginStart: 20
  },
  loginImage: {
    position: 'absolute',
    marginTop: 100,
  },
  home: {
    marginTop: -30,
    alignSelf: 'flex-end',
    marginEnd: 24
  },
  container1: {
    width: '88%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 15,
    backgroundColor: colors.grey,
    marginTop: 145
  },
  inputContainer1: {
    height: 50,
    backgroundColor: colors.lightblue,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.black,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    marginTop: 14
  },
  iconStyle1: {
    marginTop: -32,
    marginStart: 130
  },
  iconStyle2: {
    marginTop: -32,
    marginStart: 185
  },
  text1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.darkblue,
    marginStart: 8,
    marginTop: 12
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.darkblue,
    marginStart: 8,
    marginTop: 32
  },
  textInput1: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Montserrat",
    color: colors.white,
    alignSelf: 'center',
    
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
  progressBar: {
    marginTop: 40,
    alignSelf: 'center'
  },
  bottomImage: {
    marginTop: 44,
    marginStart: 34,
    width: 150,
    height: 200, 
    opacity: 0.6
  },
});

