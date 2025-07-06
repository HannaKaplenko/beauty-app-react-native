import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({

    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    scroll: {
        backgroundColor: colors.card,
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    contentContainerStyle: {
        paddingBottom: 20,
    },
    image: {
        width: "100%",
        height: 400,
        backgroundColor: colors.background,
    },
    label: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 24,
        marginBottom: 10,
    },
    brand: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 28,
        marginVertical: 10,
    },
    description: {
        color: colors.text,
        fontSize: 20,
        lineHeight: 24,
    },
    weight: {
        color: colors.text,
        fontSize: 20,
        lineHeight: 24,
        marginVertical: 10,
        textAlign: "right",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginBottom: 20,
    },
    price: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    discount: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    buyBottom: {
        backgroundColor: "#FE4F2D",
        width: "100%",
        height: 44,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    bottomText: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    }
})
