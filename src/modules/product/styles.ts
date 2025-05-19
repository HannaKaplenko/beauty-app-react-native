import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    scroll: {
        backgroundColor: "#FFE9FF",
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    image: {
        width: "100%",
        height: 400,
        backgroundColor: "#FFE9FF",
    },
    label: {
        color: "#000089",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 24,
        marginBottom: 10,
    },
        brand: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 28,
        marginVertical: 10,
    },
    description: {
        color: "#000000",
        fontSize: 20,
        lineHeight: 24,
    },
    weight: {
        color: "#000000",
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
        color: "#890023",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    discount: {
        color: "#000089",
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
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    }
})
