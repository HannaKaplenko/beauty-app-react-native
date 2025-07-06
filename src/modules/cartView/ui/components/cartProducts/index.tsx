import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useUIContext } from "../../../../../UIProvider";
import { getStyles } from "./styles";
import FastImage from "react-native-fast-image";
import { IProduct } from "../../../../../entities/product/iProduct";
import { CartStore } from "../../../../../entities/cart/CartModel";

export const CartProducts = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { cart, updateProduct, removeProducts } = CartStore();

    const onRemove = (item: IProduct) => {
        removeProducts(item.id);
    }

    const onIncrement = (item: IProduct) => {
        const oldItem = cart.items.find(({ product }) => product.id === item.id);
        if (oldItem) {
            updateProduct(oldItem?.product, oldItem.quantity + 1);
        }
    }

    const onDecrease = (item: IProduct) => {
        const oldItem = cart.items.find(({ product }) => product.id === item.id);
        if (oldItem && oldItem.quantity > 1) {
            updateProduct(oldItem?.product, oldItem.quantity - 1);
        }
    }

    if (cart.items.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>{t("cart.message")}</Text>
            </View>
        );
    }

    return (
        cart.items.map(({ product, quantity }) => (
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
                        <View style={styles.label}>
                            <TouchableOpacity style={styles.countButton} onPress={() => { onIncrement(product) }}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity style={styles.countButton} onPress={() => { onDecrease(product) }}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        ))
    );
};


