import React from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { storage } from '../../../libs/storage/AsyncStorage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const ProfileView = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const logout = async () => {
        await storage.removeItem("USER");
        navigation.replace("AuthorizationView");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}> Press "Logout" to leave your profile and close the App.</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

