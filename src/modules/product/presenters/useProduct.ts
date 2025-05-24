import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { IProduct } from "../../../entities/product/iProduct";

export const useProduct = () => {
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
    };
    return { product, isLoading, navigation }
}