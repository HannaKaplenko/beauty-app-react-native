import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { storage } from "../../../libs/storage/AsyncStorage";
import { useUserContext } from "../../../context/userContext";

export const useSplash = () => {
    const { setUser } = useUserContext();
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            isUserAuthorized();
        }, 2000);
    }, []);

    const isUserAuthorized = async () => {
        const user: any = await storage.getItem("USER");
        if (user) {
            setUser(user);
            navigation.replace("TabNavigation");
        } else {
            navigation.replace("AuthorizationView");
        }
    }
}