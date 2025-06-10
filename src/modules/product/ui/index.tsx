import React from "react";
import { getStyles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useProduct } from "../presenters/useProduct";
import { useUIContext } from "../../../UIProvider";
import FastImage from "react-native-fast-image";

export const ProductView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { product, isLoading, navigation } = useProduct();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <FastImage source={{ uri: product?.images[0] }} style={styles.image} />
                <Text style={styles.label}>{product?.title}:</Text>
                <Text style={styles.brand}>{product?.brand}</Text>
                <Text style={styles.description}>{product?.description}</Text>
                <Text style={styles.weight}>{t("product.weight")} {product?.weight} ml/g</Text>
                <View style={styles.row}>
                    <Text style={styles.description}>{t("product.stock")} {product?.stock}</Text>
                    <Text style={styles.description}>{t("product.rating")} {product?.stock}  ({`${product?.reviews.length} reviews`})</Text>
                </View>
                <View>
                    <Text style={styles.discount}>{t("product.discount")} {product?.discountPercentage}%</Text>
                    <Text style={styles.price}>{t("product.price")}{product?.price}</Text>
                </View>
                <TouchableOpacity style={styles.buyBottom}>
                    <Text style={styles.bottomText}> {t("product.bottomText")} </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};