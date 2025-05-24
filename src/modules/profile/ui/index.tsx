import React from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { useProfile } from '../presenters/useProfile';

export const ProfileView = () => {
    const { logout } = useProfile();

    return (
        <View style={styles.container}>
            <Text style={styles.message}> Press "Logout" to leave your profile and close the App.</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

