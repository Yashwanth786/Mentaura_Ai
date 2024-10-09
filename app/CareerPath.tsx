import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ToastAndroid, FlatList, ImageBackground } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MessageList from './MessageList';

SplashScreen.preventAutoHideAsync();

export default function careerpath() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
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
      <StatusBar style='auto' backgroundColor={colors.ldarkblue} />
      <View style={styles.main}>

        {/* Back button */}
        <TouchableOpacity style={styles.backcontainer}
          onPress={() => router.push('/HomePage')}>
          <Ionicons name='arrow-back-outline' size={35} color={colors.white} />
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.home} onPress={() => router.push('/HomePage')}>
          <Ionicons name="home" size={31} color={colors.white} />
        </TouchableOpacity>

        {/* Background image */}
        <View style={styles.backgroundImage}>

          {/* Robo Image */}
          <Image source={require('../assets/images/careerpath_1.png')} style={styles.robo} />

          <MessageList />

          {/* Bottom layout */}
          <View style={styles.bottomLayout}>
            <TextInput
              style={styles.messageInput}
              placeholder="Type a message..."
              placeholderTextColor="#000"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send" size={31} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>


        {/* Loading Indicator */}
        {isLoading && (
          <ActivityIndicator size="large" color={colors.darkblue} style={styles.progressBar} />
        )}

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.ldarkblue
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.ldarkblue,
  },
  backcontainer: {
    marginTop: 15,
    marginStart: 20
  },
  home: {
    marginTop: -32,
    alignSelf: 'flex-end',
    marginEnd: 24
  },

  backgroundImage: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#E3E3E3', // Matches the color in the XML
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'center',
  },
  robo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: -80,
  },
  chatLayout: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  chatItem: {
    backgroundColor: '#E3E3E3',
    padding: 10,
    marginBottom: 5,
  },

  bottomLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#E3E3E3',
  },
  messageInput: {
    flex: 1,
    height: 55,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 19,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#000',
    marginBottom: 16
  },
  sendButton: {
    marginLeft: 18,
    width: 48,
    height: 48,
  },

  progressBar: {
    marginTop: 40,
    alignSelf: 'center'
  },
});

