import React from "react";
import { Text, View } from "react-native";
import { ThemeRow } from "./components/themeRow";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";

export const ThemeView = () => {
    const { setTheme, colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {t("theme.title")}</Text>
            <ThemeRow title="Light" value="light" onPress={setTheme} />
            <ThemeRow title="Dark" value="dark" onPress={setTheme} />
        </View>
    )
};