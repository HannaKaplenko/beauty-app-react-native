import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { storage } from "../../../libs/storage/AsyncStorage";
import { userStore } from "../../../entities/user/UserModel";
import { useUIContext } from "../../../UIProvider";

type AuthorizeResult = { success: boolean; error?: string };

export const useAuthorization = () => {
    const { setUser } = userStore();
    const [form, setForm] = useState({ username: 'emilys', password: 'emilyspass', });
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation<any>();
    const { t } = useUIContext();

    const toggleCheckbox = () => {
        setIsChecked(prev => !prev);
    };

    const onChangeLogin = (text: string) => {
        setForm({ ...form, username: text });
    };

    const onChangePassword = (text: string) => {
        setForm({ ...form, password: text });
    };

    const validateCredentials = () => {
        if (form.username.trim() === "" || form.password.trim() === "") {
            return "Enter your name and password!";
        };
        return null;
    };

    const onAuthorize = async (): Promise<AuthorizeResult> => {
        const error = validateCredentials();
        if (error) {
            return { success: false, error };
        }
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    username: form.username,
                    password: form.password,
                }),
            });
            const data = await response.json();
            if (data.accessToken) {
                await storage.setItem("USER", data);
                setUser(data);
                navigation.replace('TabNavigation');
                return { success: true };
            } else {
                return { success: false, error: t("authorization.errorMessage") };
            }
        } catch (error) {
            return { success: false, error: t("authorization.errorElse") };
        }
    };
    return { form, showPassword, onChangeLogin, onChangePassword, onAuthorize, setShowPassword, toggleCheckbox, isChecked, };
}

