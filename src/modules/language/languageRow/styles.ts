import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";


export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        marginHorizontal: 24,
        alignItems: "center",
        backgroundColor: colors.card,
        marginBottom: 16,
        padding: 8,
        borderRadius: 12,
    },
    titleContainer: {
        flex: 1,
        marginLeft: 16,
        color: colors.text,
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
        color: colors.text,
    },
    outerCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FE4F2D',
    },
})