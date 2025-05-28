import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { storage } from "../../../libs/storage/AsyncStorage";
import { userStore } from "../../../entities/user/UserModel";

export const useAuthorization = () => {
    const { setUser } = userStore();
    const [form, setForm] = useState({ username: 'emilys', password: 'emilyspass', });
    const [showPassword, setShowPassword] = useState(true);
    const navigation = useNavigation<any>();
    const [error, setError] = useState("");

    const onChangeLogin = (text: string) => {
        setForm({ ...form, username: text });
    };

    const onChangePassword = (text: string) => {
        setForm({ ...form, password: text });
    };

    const onAuthorize = async () => {
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
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return { form, showPassword, error, onChangeLogin, onChangePassword, onAuthorize, setShowPassword }
}