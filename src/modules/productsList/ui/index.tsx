import React from 'react';
import { styles } from './styles';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useProductsList } from '../presenters/useProductsList';

export const ProductsView = () => {
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
                <Image source={{ uri: item.images[0] }} style={styles.image} />
              </View>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
}
