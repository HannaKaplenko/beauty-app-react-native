import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    emptyText: {
        fontSize: 18,
        color: "#999",
        textAlign: "center"
    }
})
