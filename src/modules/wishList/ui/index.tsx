import React from "react";
import { View } from "react-native";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { WishListProducts } from "./components/wishListProducts";


export const WishListView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <WishListProducts />
            </ScrollView >
        </View >
    )
};


