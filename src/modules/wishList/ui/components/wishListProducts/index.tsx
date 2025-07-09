import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useUIContext } from "../../../../../UIProvider";
import { IProduct } from "../../../../../entities/product/iProduct";
import { getStyles } from "./styles";
import { wishListStore } from "../../../../../entities/wishList/WishListModel";
import { WishListIconThin } from "../../../../../../assets/icons/WishListIconThin";

export const WishListProducts = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { wishList, updateProduct, removeProducts } = wishListStore();

    const onRemove = (item: IProduct) => {
        removeProducts(item.id);
    }

    if (wishList.items.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Your WishList is empty</Text>
            </View>
        );
    }

    return (
        wishList.items.map(({ product }) => (
            <View style={styles.item} key={product.id}>
                <View style={styles.imageContainer}>
                    <FastImage source={{ uri: product.images[0] }} style={styles.image} />
                </View>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{product.title}</Text>
                        <TouchableOpacity style={styles.countButton} onPress={() => { onRemove(product) }}>
                            <Text style={styles.buttonText}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.price}>{product.price}</Text>
                        <WishListIconThin />
                    </View>
                </View>
            </View>
        ))
    );
};


