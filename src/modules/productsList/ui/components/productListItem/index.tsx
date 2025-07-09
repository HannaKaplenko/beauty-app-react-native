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
import { wishListStore } from '../../../../../entities/wishList/WishListModel';

interface IProps {
    item: IProduct
}

export const ProductListItem = ({ item }: IProps) => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { updateProduct, cart } = CartStore();
    const { updateProduct: updateWishListProduct } = wishListStore.getState();

    const onPress = () => {
        navigation.navigate('ProductView', { id: item.id })
    }

    const onBuy = () => {
        const oldItem = cart.items.find(({ product }) => product.id === item.id);
        const newQuantity = oldItem ? oldItem.quantity + 1 : 1;
        updateProduct(item, newQuantity);
    }

    const onAdd = (item: IProduct) => {
        updateWishListProduct(item, 1);
        navigation.navigate("TabNavigation", { screen: "ProfileView", params: { openWishList: true } }, { pop: true });
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <TouchableOpacity
                onPress={() => onAdd(item)}
                style={styles.wishIconWrapper}>
                <WishListIconThin/>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: item.images[0] }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <CustomButton onPress={onBuy} text={t("productList.buyButtonText")} containerStyle={styles.buttonBuy} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
