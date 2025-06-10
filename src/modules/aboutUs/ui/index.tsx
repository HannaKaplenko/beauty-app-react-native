import React from "react";
import { View } from "react-native";
import { getStyles } from './styles';
import { useUIContext } from "../../../UIProvider";

export const AboutUsView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
        </View>
    );
}

