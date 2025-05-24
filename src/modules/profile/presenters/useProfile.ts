import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { storage } from "../../../libs/storage/AsyncStorage";

export const useProfile = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const logout = async () => {
        await storage.removeItem("USER");
        navigation.replace("AuthorizationView");
    }

    return { logout }
}