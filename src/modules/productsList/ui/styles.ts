import { StyleSheet } from "react-native";
import { IColors } from "../../../UIProvider/theme/IColors";

export const getStyles = (colors: IColors) => StyleSheet.create({
   container: {
      backgroundColor: colors.background,
      width: "100%",
      flex: 1,
   },
   contentContainerStyle: {
      paddingVertical: 20,
   },
   card: {
      backgroundColor: colors.card,
      textAlign: "center",
      padding: 20,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 15,
      height: 150,
      flex: 1,
   },
   title: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 20,
   },
   price: {
      color: colors.text,
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
   },
   image: {
      width: 70,
      height: 70,
   },
   loadingText: {
      color: colors.text,
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
      flex: 1,
   },
})
