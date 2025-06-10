import React from "react";
import { getStyles } from "./styles";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";
import { LanguageRow } from "../languageRow";

export const LanguageView = () => {
    const { setLocale, colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <LanguageRow title="English" value="en" onPress={setLocale} />
            <LanguageRow title="Українська" value="uk" onPress={setLocale} />
            <LanguageRow title="Русский" value="ru" onPress={setLocale} />
        </View>
    )
}; 