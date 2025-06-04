import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.text,
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 32,
    },
    button: {
        backgroundColor: colors.button,
        width: "80%",
        height: 44,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    message: {
        color: colors.text,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        margin: 10,
    },
    buttonText: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
})