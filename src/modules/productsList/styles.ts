import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
   container: {
      backgroundColor: "#56694F",
      width: "100%",
      flex: 1,
   },
   contentContainerStyle: {
      paddingVertical: 20,
   },
   card: {
      backgroundColor: "#CD9B59",
      textAlign: "center",
      padding: 20,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 15,
      height: 150,
      flex: 1,
   },
   title: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 20,
   },
   price: {
      color: "#000000",
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
   },
   image: {
      width: 70,
      height: 70,
   },
   loadingText: {
      color: "#000000",
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
      flex: 1,
   },
})
