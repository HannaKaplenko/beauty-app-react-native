import React from 'react';
import { getStyles } from './styles';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useUIContext } from '../../../../../UIProvider';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProduct } from '../../../../../entities/product/iProduct';

interface IProps {
    item: IProduct
}

export const ProductListItem = ({ item }: IProps) => {
    const { colors } = useUIContext();
    const styles = getStyles(colors);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onPress = () => {
        navigation.navigate('ProductView', { id: item.id })
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: item.images[0] }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.stock}>{item.stock} available</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
