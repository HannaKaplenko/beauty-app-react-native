import React from "react";
import { Text, View } from "react-native";
import { useUIContext } from "../../../UIProvider";
import { getStyles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { WishListProducts } from "./components/wishListProducts";
import { WishListStore } from "../../../entities/wishList/WishListModel";


export const WishListView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const { wishList, addProduct, removeProducts } = WishListStore();


    return (
        <View style={styles.container}>
            <FlatList data={wishList} renderItem={({ item }) => <WishListProducts item={item} />}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => {
                    return (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>{t("wishList.emptyWishListMessage")}</Text>
                        </View >
                    );
                }}
            />
        </View >
    )
};


