import { StyleSheet } from "react-native";
import { IColors } from "../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.button,
        height: 44,
        alignSelf: "stretch",
        borderRadius: 24,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        color: colors.text,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
})