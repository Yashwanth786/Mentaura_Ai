import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [education, setEducation] = useState('');
  const [degree, setDegree] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [board, setBoard] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Inter": require("../assets/fonts/Inter/static/Inter_28pt-Regular.ttf"),
    "Montserrat": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Lexend-Medium": require("../assets/fonts/Lexend/static/Lexend-Medium.ttf"),
    "Poppins": require("../assets/fonts/Poppins/Poppins-Regular.ttf")
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
      <StatusBar style='auto' backgroundColor={colors.lightblue} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>

          <Image source={require('../assets/images/register_2.png')} style={styles.LoginImage} />

          <TouchableOpacity style={styles.backcontainer} onPress={() => router.push('/HomePage')}>
            <Ionicons name='arrow-back-outline' size={35} color={colors.white} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.home} onPress={() => router.push('/HomePage')}>
            <Ionicons name="home" size={35} color={colors.white} />
          </TouchableOpacity>

          <Image source={require('../assets/images/register_1.png')} style={styles.loginImage} />

          <View style={styles.container1}>
            {/* Age Input */}
            <View style={styles.inputContainer}>
              <Ionicons name="calendar" size={24} color={colors.darkblue} style={styles.iconStyle} />
              <Text style={styles.text} >Age:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                placeholderTextColor={colors.white}
              />
            </View>

            {/* Gender Picker */}
            <View style={styles.inputContainer}>
              <Ionicons name="person" size={24} color={colors.darkblue} style={styles.iconStyle} />
              <Text style={styles.text}>Gender:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  style={styles.picker}
                  onValueChange={(itemValue: string, itemIndex) => { setGender(itemIndex === 0 ? "" : itemValue); }}
                  mode="dropdown"
                >
                  <Picker.Item style={styles.pickeritems} fontFamily='Montserrat' label="Select Gender" value={null} />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
            </View>

            {/* Education Picker */}
            <View style={styles.inputContainer}>
              <Ionicons name="person" size={24} color={colors.darkblue} style={styles.iconStyle} />
              <Text style={styles.text}>Education:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={education}
                  style={styles.picker}
                  onValueChange={(itemValue: string, itemIndex) => { setEducation(itemIndex === 0 ? "" : itemValue); }}
                  mode="dropdown"
                >
                  <Picker.Item label="Select Education" value={null} />
                  <Picker.Item label="High School" value="highschool" />
                  <Picker.Item label="Bachelor's" value="bachelor" />
                  <Picker.Item label="Master's" value="master" />
                </Picker>
              </View>
            </View>


            {/* Conditionally render based on education selection */}
            {education === 'highschool' && (
              <>
                {/* Board Picker */}
                <View style={styles.inputContainer}>
                  
                  <Picker
                    selectedValue={board}
                    style={styles.picker}
                    onValueChange={(itemValue: string) => setBoard(itemValue)}
                  >
                    <Picker.Item label="Select Board" value="" />
                    <Picker.Item label="CBSE" value="cbse" />
                    <Picker.Item label="ICSE" value="icse" />
                    <Picker.Item label="State Board" value="stateboard" />
                  </Picker>
                </View>

                {/* Subject Picker */}
                <View style={styles.inputContainer}>
                  
                  <Picker
                    selectedValue={subject}
                    style={styles.picker}
                    onValueChange={(itemValue: string) => setSubject(itemValue)}
                  >
                    <Picker.Item label="Select Subject" value="" />
                    <Picker.Item label="Mathematics" value="math" />
                    <Picker.Item label="Physics" value="physics" />
                    <Picker.Item label="Chemistry" value="chemistry" />
                  </Picker>
                </View>
              </>
            )}

            {education === 'bachelor' && (
              <>
                {/* Degree Picker */}
                <View style={styles.inputContainer}>
                  
                  <Picker
                    selectedValue={degree}
                    style={styles.picker}
                    onValueChange={(itemValue: string) => setDegree(itemValue)}
                  >
                    <Picker.Item label="Select Degree" value="" />
                    <Picker.Item label="Engineering" value="engineering" />
                    <Picker.Item label="Medicine" value="medicine" />
                  </Picker>
                </View>

                {/* Branch Picker */}
                <View style={styles.inputContainer}>
                  
                  <Picker
                    selectedValue={branch}
                    style={styles.picker}
                    onValueChange={(itemValue: string) => setBranch(itemValue)}
                  >
                    <Picker.Item label="Select Branch" value="" />
                    <Picker.Item label="Computer Science" value="cse" />
                    <Picker.Item label="Mechanical" value="mech" />
                  </Picker>
                </View>
              </>
            )} 

            {/* Hobbies Section */}
            <Text style={styles.hobbiesText}>Interests:</Text>
            <TextInput
              style={styles.inputhobbies}
              placeholder="Provide a description of your Interests"
              placeholderTextColor="#fff"
              multiline={true}
            ></TextInput>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => router.push('/CareerPath')}>
              <LinearGradient
                colors={['#1398C2', '#09485C']}
                start={{ x: 0, y: 0 }} // Starting point (left)
                end={{ x: 1, y: 0 }} // Ending point (right)
                style={styles.gradient}>
                <Text style={styles.buttonText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>
  
          {/* Loading Indicator */}
          {isLoading && (
            <ActivityIndicator size="large" color={colors.darkblue} style={styles.progressBar} />
          )}

          <Image source={require('../assets/images/register_5.png')} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.lightblue, // Ensure the background color is applied
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
  LoginImage: {
    position: 'absolute',
    marginTop: -5,
    alignSelf: 'center'
  },
  backcontainer: {
    marginTop: 25,
    marginStart: 16
  },
  home: {
    marginTop: -30,
    alignSelf: 'flex-end',
    marginEnd: 16
  },
  loginImage: {
    position: 'absolute',
    marginTop: 100,
  },
  container1: {
    width: '88%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 15,
    backgroundColor: colors.grey,
    marginTop: 125
  },
  inputContainer: {
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
    marginTop: 24
  },
  iconStyle: {
    marginRight: 0
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: colors.darkblue,
    marginStart: 8,
    marginTop: 3
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Montserrat",
    color: colors.white,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  pickerContainer: {
    flex: 1,
    height: 48,
    backgroundColor: colors.black,
    borderRadius: 24,
    overflow: 'hidden'
  },
  picker: {
    backgroundColor: colors.lightblue,
    fontFamily: "Montserrat",
    color: '#fff',
  },
  pickeritems: {
    backgroundColor: colors.lightblue,
  },


  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  hobbiesText: {
    marginTop: 52,
    fontSize: 20,
    fontFamily: 'Poppins',
    color: colors.lldarkblue,
    textAlign: 'center',
  },
  inputhobbies: {
    width: '100%',
    height: 75,
    backgroundColor: colors.darkblue,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: colors.black,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.white
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginTop: 42,
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
});

