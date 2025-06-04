import React from 'react';
import { getStyles } from './styles';
import { Text, View } from 'react-native';
import { useSplash } from '../presenters/useSplash';
import { useUIContext } from '../../../UIProvider';

export const SplashView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);
    useSplash();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ur Needs</Text>
        </View>
    );
};

