import React from 'react';
import { getStyles } from './styles';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useUIContext } from '../../../../../UIProvider';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProduct } from '../../../../../entities/product/iProduct';
import { CustomButton } from '../../../../../UIKit/CustomButton';
import { CartStore } from '../../../../../entities/cart/CartModel';
import { WishListIconThin } from '../../../../../../assets/icons/WishListIconThin';
import { WishListStore } from '../../../../../entities/wishList/WishListModel';

interface IProps {
    item: IProduct
}

export const ProductListItem = ({ item }: IProps) => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { updateProduct, cart } = CartStore();
    const { addProduct: updateWishListProduct, isFavorite, removeProducts } = WishListStore();

    const onPress = () => {
        navigation.navigate('ProductView', { id: item.id })
    }

    const onBuy = () => {
        const oldItem = cart.items.find(({ product }) => product.id === item.id);
        const newQuantity = oldItem ? oldItem.quantity + 1 : 1;
        updateProduct(item, newQuantity);
    }

    const onPressWishList = () => {
        if (isFavorite(item.id)) {
            removeProducts(item.id);
        } else {
            updateWishListProduct(item);
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: item.images[0] }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <View style={styles.iconPosition}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity
                        onPress= {onPressWishList}
                        style={styles.wishIconWrapper}>
                        <WishListIconThin color={isFavorite(item.id) ? "red" : "grey"} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <CustomButton onPress={onBuy} text={t("productList.buyButtonText")} containerStyle={styles.buttonBuy} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
