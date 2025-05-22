import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';
import { storage } from '../../../libs/storage/AsyncStorage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const SplashView = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            isUserAuthorized();
        }, 2000);
    }, []);

    const isUserAuthorized = async () => {
        const user = await storage.getItem("USER");
        if (user) {
            navigation.replace("TabNavigation");
        } else {
            navigation.replace("AuthorizationView");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ur Needs</Text>
        </View>
    );
};

