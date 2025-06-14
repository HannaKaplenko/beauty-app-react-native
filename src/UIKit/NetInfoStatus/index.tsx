import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { getStyles } from "./styles"
import { useUIContext } from "../../UIProvider";
import { useNetInfoInstance } from "@react-native-community/netinfo";

export const NetInfoStatus: FC = ({ }) => {
    const { colors, t } = useUIContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const { netInfo: { isConnected } } = useNetInfoInstance();

    return (
        typeof isConnected != "boolean" && isConnected
            ? null
            : <View style={styles.container}>
                <Text style={styles.text}>{t("NetInfoStatus.message")}</Text>
            </View>
    )
}
