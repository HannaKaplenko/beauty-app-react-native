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
import { WishListStore } from "../../../../../entities/wishList/WishListModel";
import { WishListIconThin } from "../../../../../../assets/icons/WishListIconThin";

export const ProductDetails = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { product, isLoading } = useProduct();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { updateProduct } = CartStore();
    const { addProduct: updateWishListProduct, isFavorite, removeProducts } = WishListStore();

    const onBuy = (item: IProduct) => {
        updateProduct(item, 1);
        navigation.navigate("TabNavigation", { screen: "CartView", params: { products: item } }, { pop: true });
    }

    const onPressWishList = (item: IProduct) => {
        if (isFavorite(item.id)) {
            removeProducts(item.id);
        } else {
            updateWishListProduct(item);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.imageWrapper}>
                    <FastImage source={{ uri: product?.images[0] }} style={styles.image} />
                    <TouchableOpacity
                        style={styles.wishListIcon}
                        onPress={() => {
                            if (product) onPressWishList(product);
                        }}>
                        <WishListIconThin color={product && isFavorite(product?.id) ? "red" : "grey"} />
                    </TouchableOpacity>
                </View>
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
                <CustomButton onPress={() => product && onBuy(product)} text={t("productList.buyButtonText")} containerStyle={styles.buyBottom} />
            </ScrollView>
        </View>
    )
};

