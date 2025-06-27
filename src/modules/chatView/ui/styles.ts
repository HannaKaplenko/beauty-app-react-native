import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    card: {
        width: "85%",
        height: 480,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 24,
        backgroundColor: colors.card,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    title: {
        textAlign: "center",
        color: colors.text,
        fontWeight: "bold",
        lineHeight: 32,
        fontSize: 24,
    },
    text: {
        padding: 8,
        marginVertical: 24,
        fontSize: 20,
        color: colors.text,
        lineHeight: 24,
    },
})