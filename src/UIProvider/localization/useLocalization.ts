import { useEffect, useMemo, useState } from "react";
import { storage } from "../../libs/storage/AsyncStorage";
import en from "./translation/en.json"
import uk from "./translation/uk.json"
import ru from "./translation/ru.json"
import { I18n } from "i18n-js";

const i18n = new I18n();
i18n.enableFallback = true;
i18n.translations = { uk, en, ru };

export const useLocalization = () => {
    const [locale, setLocale] = useState<string>("uk");

    useEffect(() => {
        getLanguage();
    }, []);

    const getLanguage = async () => {
        const data = await storage.getItem("LANGUAGE");
        if (data === "en" || data === "uk" || data === "ru") {
            setLocale(data);
        }
    }

    const locales = useMemo(() => {
        return Object.keys(i18n.translations);
    }, []);

    const onHandleChangeLocale = async (newLanguage: "uk" | "en" | "ru" | string) => {
        setLocale(newLanguage);
        storage.setItem("LANGUAGE", newLanguage);
    };

    const t = (key: string, params: Record<string, any> = {}) => {
        return i18n.t(key, { locale: locale, ...params });
    };

    return { locales, locale, onHandleChangeLocale, t };
}