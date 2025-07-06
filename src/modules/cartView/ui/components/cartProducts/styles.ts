import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        padding: 6,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 8,
        gap: 6,
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
    },
    description: {
        lineHeight: 18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '700',
    },
    buttonBuy: {
        height: 28,
        paddingHorizontal: 32,
    },
    label: {
        paddingHorizontal: 24,
        backgroundColor: colors.button,
        paddingVertical: 4,
        borderRadius: 8,
        flexDirection: "row",
        gap: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    quantity: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500',
        width: 20,
        textAlign: "center"
    },
    buttonText: {
        fontWeight: "700",
        textAlign: "center"
    },
    countButton: {
        width: 18,
        height: 18,
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        textAlign: "center"
    }
})
