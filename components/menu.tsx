import React from 'react';
import { Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../assets/colors';

export default function menu(props: any) {

    const handleMenuClick = (itemName: any) => {
        switch (itemName) {
            case 'Home':
                props.navigation.navigate('Home');
                break;
            case 'Profile':
                props.navigation.navigate('Profile');
                break;
            case 'AntiDistraction':
                props.navigation.navigate('AntiDistraction');
                break;
            case 'SavedMessages':
                props.navigation.navigate('SavedMessages');
                break;
            case 'Help':
                props.navigation.navigate('Help');
                break;
            case 'ShareUs':
                props.navigation.navigate('ShareUs');
                break;
            case 'Settings':
                props.navigation.navigate('Settings');
                break;
            case 'SignOut':
                // Implement Sign Out logic here
                Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Yes', onPress: () => props.navigation.navigate('SignOut') },
                ]);
                break;
            default:
                Alert.alert('Error', 'Unknown menu item clicked');
        }
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
            <React.Fragment>
                {/* You can add a custom header here if needed */}
                <DrawerItem
                    label="Home"
                    onPress={() => handleMenuClick('Home')}
                    icon={({ color, size }) => <Ionicons name='home' size={size} color={colors.white} />}
                />
                <DrawerItem
                    label="Profile"
                    onPress={() => handleMenuClick('Profile')}
                    icon={({ color, size }) => <Ionicons name='person' size={size} color={colors.white} />}
                />
                
            </React.Fragment>
            <DrawerItem
                label="Sign Out"
                onPress={() => handleMenuClick('SignOut')}
                icon={({ color, size }) => <Ionicons name='log-out' size={size} color={colors.white} />}
            />
        </DrawerContentScrollView>
    );
}
