import React, { FC, useMemo } from "react";
import { getStyles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"
import { useUIContext } from "../../../../../UIProvider";

interface IProps {
    title: string;
    value: "light" | "dark";
    onPress: (value: "light" | "dark") => void;
}

export const ThemeRow: FC<IProps> = ({ value, title, onPress }) => {
    const { theme, colors } = useUIContext();
    const styles = getStyles(colors);

    const onHandlePress = () => {
        onPress(value);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
            </View>
            <View style={styles.outerCircle}>
                {theme === value ? <View style={styles.innerCircle} /> : null}
            </View>
        </TouchableOpacity>
    )
}