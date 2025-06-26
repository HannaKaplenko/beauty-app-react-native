import React from "react";
import { ScrollView, Text, View } from "react-native";
import { getStyles } from './styles';
import { useUIContext } from "../../../UIProvider";
import { Image } from "react-native-svg";
import FastImage from "react-native-fast-image";

export const AboutUsView = () => {
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FastImage source={require("../../../../assets/images/aboutUSPic.png")} style={styles.image} />
            <View style={styles.card}>
                <Text style={styles.title}>{t("aboutUs.title")}</Text>
                <Text style={styles.text}>{t("aboutUs.text")}</Text>
            </View>
        </ScrollView>
    );
}

