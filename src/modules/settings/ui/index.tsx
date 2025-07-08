import React from "react";
import { View } from "react-native";
import { getStyles } from './styles';
import { DeliveryRow } from "./components/deliveryRow";
import { useUIContext } from "../../../UIProvider";

export const SettingsView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <DeliveryRow
                title="Мої адреси доставки"
                onPress={() => console.log('Pressed delivery row')} />
            <DeliveryRow
                title="Моя знижка"
                onPress={() => console.log('Pressed discount row')} />
        </View>
    );
};