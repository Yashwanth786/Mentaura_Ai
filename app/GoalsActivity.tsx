import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ListRenderItem } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

// Define the type for the data items
interface GoalItem {
    id: string;
    name: string;
}

// Sample data (replace with real data from Firebase or other sources)
const roadmapData: GoalItem[] = [
    { id: '1', name: 'Learn React Native' },
    { id: '2', name: 'Build a Portfolio' },
];

const weeklyGoalsData: GoalItem[] = [
    { id: '1', name: 'Complete Expo Router Tutorial' },
    { id: '2', name: 'Submit Job Application' },
];

const GoalsActivity: React.FC = () => {
    const router = useRouter(); // Use Expo Router for navigation

    const renderRoadmapItem: ListRenderItem<GoalItem> = ({ item }) => (
        <View style={styles.bubbleContainer}>
            <Text style={styles.recyclerView_text}>{item.name}</Text>
        </View>
    );

    const renderWeeklyGoalsItem: ListRenderItem<GoalItem> = ({ item }) => (
        <View style={styles.bubbleContainer}>
            <Text style={styles.recyclerView_text}>{item.name}</Text>
        </View>
    );

    const [fontsLoaded, error] = useFonts({
        "Roboto": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-SemiBold": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
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
        <SafeAreaView style={styles.safecontainer} >
            <StatusBar style='auto' backgroundColor={colors.lightblue} />
            <View style={styles.container}>
                {/* Header Section */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('/MainActivity')}>
                        <Ionicons
                            name='arrow-back-outline' size={35} color={colors.darkblue}
                            style={styles.backButton}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>GOALS</Text>
                </View>

                {/* Preferred Career Path */}
                <Text style={styles.careerPathText}>Career Roadmap</Text>

                {/* Roadmap RecyclerView */}
                <FlatList
                    data={roadmapData}
                    renderItem={renderRoadmapItem}
                    keyExtractor={(item) => item.id}
                    style={styles.recyclerView}
                />

                <Text style={styles.weekly}>Weekly Goals</Text>

                {/* Weekly Goals RecyclerView */}
                <FlatList
                    data={weeklyGoalsData}
                    renderItem={renderWeeklyGoalsItem}
                    keyExtractor={(item) => item.id}
                    style={styles.recyclerView}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safecontainer: {
        flex: 1,
        backgroundColor: colors.lightblue
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        height: 50,
        backgroundColor: colors.lightblue,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    backButton: {
        marginTop: -5,
        marginRight: 16,
    },
    title: {
        marginTop: -10.5,
        marginStart: 80,
        fontSize: 34,
        fontFamily: 'Roboto-Bold',
        color: colors.darkblue,
        textAlign: 'center'
    },
    careerPathText: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: colors.darkblue
    },
    weekly: {
        marginTop: 8,
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: colors.darkblue
    },
    recyclerView: {
        flex: 1,
        margin: 16,
        padding: 8,
        backgroundColor: colors.darkblue,
        borderRadius: 16,
    },
    bubbleContainer: {
        padding: 16,
        backgroundColor: colors.lightblue,
        marginBottom: 8,
        borderRadius: 8,
    },
    recyclerView_text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: colors.white
    }
});

export default GoalsActivity;
