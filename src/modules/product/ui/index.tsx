import React from "react";
import { getStyles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useProduct } from "../presenters/useProduct";
import { useUIContext } from "../../../UIProvider";
import { ProductDetails } from "./components/productDetails";

export const ProductView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <ProductDetails/>
            </ScrollView>
        </View>
    )
};