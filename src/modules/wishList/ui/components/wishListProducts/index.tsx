import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useUIContext } from "../../../../../UIProvider";
import { IProduct } from "../../../../../entities/product/iProduct";
import { getStyles } from "./styles";
import { WishListStore } from "../../../../../entities/wishList/WishListModel";
import { WishListIconThin } from "../../../../../../assets/icons/WishListIconThin";

interface IProps {
    item: IProduct;
}

export const WishListProducts = ({ item }: IProps) => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { removeProducts } = WishListStore();

    const onRemove = (item: IProduct) => {
        removeProducts(item.id);
    }

    return (
        <View style={styles.item} >
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: item.images[0] }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.wishIcon} onPress={() => { onRemove(item) }}>
                        <WishListIconThin color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


