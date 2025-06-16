import { StyleSheet } from "react-native";

export const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.text,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: colors.text,
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        padding: 16,
        marginVertical: 20,
        color: colors.text,
    },
    button: {
        backgroundColor: colors.button,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        margin: 8,
    },
    buttonText: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
});