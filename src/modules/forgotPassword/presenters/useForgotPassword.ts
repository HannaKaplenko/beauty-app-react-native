import { useState } from "react";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUIContext } from "../../../UIProvider";

export const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation<any>();
    const { t } = useUIContext();

    const onChangeEmail = (text: string) => {
        setEmail(text);
    };

    const onSubmit = async () => {
        if (!email.trim()) {
            ToastAndroid.show(t("forgotPassword.empty"), ToastAndroid.SHORT);
            return;
        }
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                ToastAndroid.show(t("forgotPassword.success"), ToastAndroid.SHORT);
                navigation.goBack();
            } else {
                ToastAndroid.show(data.message || t("forgotPassword.error"), ToastAndroid.SHORT);
            }
        } catch (e) {
            ToastAndroid.show(t("forgotPassword.error"), ToastAndroid.SHORT);
        }
    };

    return { email, onChangeEmail, onSubmit };
};