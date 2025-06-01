import React from "react";
import { Text, View } from "react-native";
import { ThemeRow } from "./components/themeRow";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";

export const ThemeView = () => {
    const { setTheme, colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Here you can choose the color theme. </Text>
            <ThemeRow title="Light" value="light" onPress={setTheme} />
            <ThemeRow title="Dark" value="dark" onPress={setTheme} />
        </View>
    )
};