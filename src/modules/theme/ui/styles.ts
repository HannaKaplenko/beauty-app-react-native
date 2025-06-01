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
    text: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 40,
    }
})