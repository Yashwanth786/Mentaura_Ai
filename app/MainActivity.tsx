import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import GoalsActivity from './GoalsActivity';
import SubscriptionsActivity from './SubscriptionsActivity';

type DrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator<DrawerParamList>();
type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;



export default function MainActivity() {
  const router = useRouter();

  const navigation = useNavigation<DrawerNavProp>();

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Medium": require("../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
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

            <NavigationContainer>
              <View style={{ flex: 1 }}>
                {/* Menu Button */}
                <View style={styles.menu}>
                  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name='menu' size={35} color="white" />
                  </TouchableOpacity>
                </View>

                <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={GoalsActivity} />
                  <Drawer.Screen name="Notifications" component={SubscriptionsActivity} />
                </Drawer.Navigator>
              </View>
            </NavigationContainer>

            <Text style={styles.header_text_user} >Hi, User!</Text>

            <Text style={styles.header_text_community} >Preferred role</Text>
            
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push('/MainActivity')}>
            <LinearGradient
              colors={['#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_2.png')} style={styles.lefticon} />
              <Text style={styles.buttonText}>Communities</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => router.push('/GoalsActivity')}>
            <LinearGradient
              colors={['#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_3.png')} style={styles.lefticon} />
              <Text style={styles.buttonText}>Goals</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => router.push('/MainActivity')}>
            <LinearGradient
              colors={['#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_4.png')} style={styles.lefticon1} />
              <Text style={styles.buttonText1}>Achievements and Awards</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => router.push('/SubscriptionsActivity')}>
            <LinearGradient
              colors={['#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_5.png')} style={styles.lefticon} />
              <Text style={styles.buttonText}>Subscriptions</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => router.push('/MainActivity')}>
            <LinearGradient
              colors={['#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_6.png')} style={styles.lefticon} />
              <Text style={styles.buttonText}>Courses</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => router.push('/MainActivity')}>
            <LinearGradient
              colors={[ '#75D6FF', '#69B8D7', '#65AFCC', '#425B5C']}
              locations={[0, 0.30, 0.75, 1]}
              start={{ x: 0, y: 0 }} // Starting point (left)
              end={{ x: 1, y: 0 }} // Ending point (right)
              style={styles.gradient}>
              <Image source={require('../assets/images/mainactivity_7.png')} style={styles.lefticon} />
              <Text style={styles.buttonText}>Jobs and Opportunities</Text>
              <Ionicons name='chevron-forward' size={35} color={'#CFC90A'} style={styles.righticon} />
            </LinearGradient>
          </TouchableOpacity>

          {/* Bottom Image */}
          <Image source={require('../assets/images/base_for_login_and_register.png')} style={styles.bottomImage} />

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
    backgroundColor: '#0C5D80',
  },
  header:{
    height: 300,
    backgroundColor: colors.customColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 0.1,
    borderBottomWidth: 5,
    borderBlockColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,       
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
    width: '90%',
    height: 52,
    alignSelf: 'center',
    marginTop: 52,
    marginBottom: 16
  },
  buttonContainer1: {
    width: '90%',
    height: 52,
    alignSelf: 'center',
    marginBottom: 16
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.1,
    borderBottomWidth: 2,
    borderBlockColor: 'rgba(0, 0, 0, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,       
  },
  lefticon: {
    width: 24,
    height: 24,
    marginStart: 16,
  },
  lefticon1: {
    width: 18,
    height: 26,
    marginStart: 16   
  },
  buttonText: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginStart: 10
  },
  buttonText1: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginStart: 16
  },
  righticon: {
    marginEnd: 10
  },
  bottomImage: {
    aspectRatio: 2.15,
  },
});

