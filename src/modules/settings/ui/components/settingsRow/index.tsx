import React, { FC } from "react";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native"
import { Chevron } from "../../../../../../assets/icons/Chevron";

interface IProps {
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

export const SettingsRow: FC<IProps> = ({ title, icon, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon}
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
            </View>
            <Chevron position="RIGHT" color={"#000000"} width={20} height={20} />
        </TouchableOpacity>
    )
}