import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export const ProductView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<any>([]);
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
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.description}>{'\t'} {product.description}</Text>
                <Text style={styles.price}>Price: ${product.price}</Text>
                <Text style={styles.discount}>Discount: {product.discountPercentage}%</Text>
                {/* <Image source={{ uri: product.images[0] }} style={styles.image} /> */}
                <Text style={styles.description}>Stock: {product.stock}</Text>
            </View>
      
    )
};