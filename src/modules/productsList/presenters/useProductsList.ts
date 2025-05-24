import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export const useProductsList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<any>([]);
    const navigation = useNavigation<any>();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
    };
    return { isLoading, navigation, products, }
}