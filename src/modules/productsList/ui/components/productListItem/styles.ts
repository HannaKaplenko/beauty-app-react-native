import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        padding: 6,
        borderRadius: 12,
        marginHorizontal: 16,
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
    stock: {
        fontSize: 12,
        lineHeight: 16,
    }
})
