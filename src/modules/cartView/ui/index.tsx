import React from "react";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";

export const CartView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
        </View>
    )
};


