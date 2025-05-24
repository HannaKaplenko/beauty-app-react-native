import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { storage } from "../../../libs/storage/AsyncStorage";

export const useSplash = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            isUserAuthorized();
        }, 2000);
    }, []);

    const isUserAuthorized = async () => {
        const user = await storage.getItem("USER");
        if (user) {
            navigation.replace("TabNavigation");
        } else {
            navigation.replace("AuthorizationView");
        }
    }
}