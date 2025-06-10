import React, { FC } from "react";
import { getStyles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"

interface IProps {
    title: string;
    value: string;
    onPress: (value: string) => void;
}
import { useUIContext } from "../../../UIProvider";

export const LanguageRow: FC<IProps> = ({ value, title, onPress }) => {
    const { locale, colors } = useUIContext();
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
                {locale === value ? <View style={styles.innerCircle} /> : null}
            </View>
        </TouchableOpacity>
    )
}