import React from "react";
import { getStyles } from "./styles";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";


export const WishListView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
        </View>
    )
};