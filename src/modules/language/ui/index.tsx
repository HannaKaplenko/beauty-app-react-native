import React from "react";
import { getStyles } from "./styles";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";


export const LanguageView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>

        </View>
    )
};