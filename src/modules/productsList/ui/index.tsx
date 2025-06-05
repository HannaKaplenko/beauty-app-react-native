import React from 'react';
import { getStyles } from './styles';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useProductsList } from '../presenters/useProductsList';
import { useUIContext } from '../../../UIProvider';
import FastImage from 'react-native-fast-image';

export const ProductsView = () => {
  const { colors } = useUIContext();
  const styles = getStyles(colors);
  const { isLoading, navigation, products } = useProductsList();

  return (
    <View style={styles.container}>
      {isLoading
        ?
        <Text style={styles.loadingText}> Loading...</Text>
        :
        <FlatList
          data={products}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ProductView', { id: item.id })}>
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <FastImage source={{ uri: item.images[0] }} style={styles.image} />
              </View>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
}
