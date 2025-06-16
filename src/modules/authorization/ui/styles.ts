import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";
import CheckBox from "react-native-check-box";

export const getStyles = (colors: IColors) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: 343,
        height: 422,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 24,
        backgroundColor: colors.card,
        marginHorizontal: 16,
        marginVertical: 195,
    },
    title: {
        color: colors.text,
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 32,
    },
    label: {
        color: colors.text,
        fontWeight: 500,
        fontSize: 16,
    },
    image: {
        width: 16,
        height: 11,
        position: 'absolute',
        marginLeft: "85%",
    },
    input: {
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        color: colors.text,
        paddingHorizontal: 8,
        marginVertical: 10,
    },
    inputWrapper: {
        justifyContent: 'center',
        display: "flex",
        position: 'relative',
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
        padding: 8,
        marginBottom: 28,
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkBoxText: {
        color: colors.text,
        lineHeight: 16,
    },
    message: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        marginBottom: 24,
        marginTop: 32,
        paddingTop: 16,
    },
    button: {
        backgroundColor: colors.button,
        width: 295,
        height: 44,
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
    },
    buttonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
})