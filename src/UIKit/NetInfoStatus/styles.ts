import { StyleSheet } from "react-native";
import { IColors } from "../../UIProvider/theme/IColors"

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.notification + "DD",
        width: "100%",
        height: 120,
        justifyContent: "flex-end",
        paddingBottom: 16,
        position: "absolute",
        top: 0,
    },
    text: {
        color: colors.text_inverse,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    }
});