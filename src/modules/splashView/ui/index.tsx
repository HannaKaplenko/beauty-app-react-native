import React from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';
import { useSplash } from '../presenters/useSplash';

export const SplashView = () => {
    useSplash();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ur Needs</Text>
        </View>
    );
};

