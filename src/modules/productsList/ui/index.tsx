import React from 'react';
import { getStyles } from './styles';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useProductsList } from '../presenters/useProductsList';
import { useUIContext } from '../../../UIProvider';
import { ProductListItem } from './components/productListItem';
import { IProduct } from '../../../entities/product/iProduct';

export const ProductsView = () => {
  const { colors } = useUIContext();
  const styles = getStyles(colors);
  const { isLoading, products } = useProductsList();

  const keyExtractor = (item: IProduct) => item.id.toString();

  const renderItem = ({ item }: { item: IProduct }) => (
    <ProductListItem item={item} />
  );

  return (
    <View style={styles.container}>
      {isLoading
        ? <Text style={styles.loadingText}> Loading...</Text>
        : <FlatList
          data={products}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      }
    </View>
  );
}
