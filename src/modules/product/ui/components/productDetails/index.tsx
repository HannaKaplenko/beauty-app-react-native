import React from "react";
import { getStyles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import { useUIContext } from "../../../../../UIProvider";
import { useProduct } from "../../../presenters/useProduct";
import { CustomButton } from "../../../../../UIKit/CustomButton";
import { CartStore } from "../../../../../entities/cart/CartModel";
import { IProduct } from "../../../../../entities/product/iProduct";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { wishListStore } from "../../../../../entities/wishList/WishListModel";
import { WishListIconThin } from "../../../../../../assets/icons/WishListIconThin";

export const ProductDetails = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { product, isLoading } = useProduct();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { updateProduct } = CartStore();
    const { updateProduct: updateWishListProduct } = wishListStore.getState();

    const onBuy = (item: IProduct) => {
        updateProduct(item, 1);
        navigation.navigate("TabNavigation", { screen: "CartView", params: { products: item } }, { pop: true });
    }

    const onAdd = (item: IProduct) => {
        updateWishListProduct(item, 1);
        navigation.navigate("TabNavigation", { screen: "ProfileView", params: { openWishList: true } }, { pop: true });
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <FastImage source={{ uri: product?.images[0] }} style={styles.image} />
                <View style={styles.iconPosition}>
                    <Text style={styles.label}>{product?.title}:</Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (product) onAdd(product);
                        }}>
                        <WishListIconThin />
                    </TouchableOpacity>
                </View>
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
                <CustomButton onPress={() => product && onBuy(product)} text={t("productList.buyButtonText")} containerStyle={styles.buyBottom} />
            </ScrollView>
        </View>
    )
};

