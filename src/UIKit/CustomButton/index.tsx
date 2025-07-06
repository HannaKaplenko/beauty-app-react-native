import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native';
import { useUIContext } from '../../UIProvider';
import { getStyles } from './styles';

interface IProps extends React.ComponentProps<typeof TouchableOpacity> {
    text: string;
    loading?: boolean;
    containerStyle?: ViewStyle;
    onPress: () => void;
}

export const CustomButton = ({ text, loading, onPress, containerStyle, ...props }: IProps) => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <TouchableOpacity
            {...props}
            disabled={loading || props.disabled}
            style={[styles.container, containerStyle, props.disabled ? styles.disabled : undefined]}
            onPress={onPress}
        >
            {loading
                ? <ActivityIndicator color="#fff" />
                : <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    );
};


