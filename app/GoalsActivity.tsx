import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { SplashScreen, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import colors from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ListRenderItem } from 'react-native';

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
            <Text>{item.name}</Text>
        </View>
    );

    const renderWeeklyGoalsItem: ListRenderItem<GoalItem> = ({ item }) => (
        <View style={styles.bubbleContainer}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons
                        name='arrow-back-outline' size={35} color={colors.white}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>GOALS</Text>
            </View>

            {/* Preferred Career Path */}
            <Text style={styles.careerPathText}>Preferred Career Path</Text>

            {/* Roadmap RecyclerView */}
            <FlatList
                data={roadmapData}
                renderItem={renderRoadmapItem}
                keyExtractor={(item) => item.id}
                style={styles.recyclerView}
            />

            {/* Weekly Goals RecyclerView */}
            <FlatList
                data={weeklyGoalsData}
                renderItem={renderWeeklyGoalsItem}
                keyExtractor={(item) => item.id}
                style={styles.recyclerView}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 75,
        backgroundColor: '#ADD8E6', // lightblue
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    backButton: {
        width: 32,
        height: 32,
        tintColor: '#00008B', // darkblue
        marginRight: 16,
    },
    title: {
        fontSize: 34,
        fontFamily: 'Roboto-Bold',
        color: '#00008B', // darkblue
    },
    careerPathText: {
        marginTop: 32,
        marginLeft: 34,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#00008B', // darkblue
    },
    recyclerView: {
        flex: 1,
        margin: 16,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
    },
    bubbleContainer: {
        padding: 16,
        backgroundColor: '#E0E0E0',
        marginBottom: 8,
        borderRadius: 8,
    },
});

export default GoalsActivity;
