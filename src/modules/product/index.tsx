import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IProduct } from "../../entities/product/iProduct";
import { ScrollView } from "react-native";

export const ProductView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<IProduct | null>(null);
    const navigation = useNavigation<any>();
    const { id } = useRoute<any>().params || {};

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
    }
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