import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { storage } from "../../../libs/storage/AsyncStorage";
import { userStore } from "../../../entities/user/UserModel";

export const useSplash = () => {
    const { setUser } = userStore();
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            isUserAuthorized();
        }, 2000);
    }, []);

    const isUserAuthorized = async () => {
        const user: any = await storage.getItem("USER");
        if (user) {
            navigation.replace("TabNavigation");
        } else {
            navigation.replace("AuthorizationView");
        }
    }
}