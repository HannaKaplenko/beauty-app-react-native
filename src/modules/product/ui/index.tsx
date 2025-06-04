import React from "react";
import { getStyles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useProduct } from "../presenters/useProduct";
import { useUIContext } from "../../../UIProvider";

export const ProductView = () => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);
    const { product, isLoading, navigation } = useProduct();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <Image source={{ uri: product?.images[0] }} style={styles.image} />
                <Text style={styles.label}>{product?.title}:</Text>
                <Text style={styles.brand}>{product?.brand}</Text>
                <Text style={styles.description}>{product?.description}</Text>
                <Text style={styles.weight}>weight: {product?.weight} ml/g</Text>
                <View style={styles.row}>
                    <Text style={styles.description}>Stock: {product?.stock}</Text>
                    <Text style={styles.description}>Rating: {product?.stock}  ({`${product?.reviews.length} reviews`})</Text>
                </View>
                <View>
                    <Text style={styles.discount}>Discount: {product?.discountPercentage}%</Text>
                    <Text style={styles.price}>Price: ${product?.price}</Text>
                </View>
                <TouchableOpacity style={styles.buyBottom}>
                    <Text style={styles.bottomText}> Add to Cart </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};