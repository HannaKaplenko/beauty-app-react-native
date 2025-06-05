import { useEffect, useState } from "react";
import { COLORS } from "./colors";
import { storage } from "../../libs/storage/AsyncStorage";

export const useColorTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        getTheme();
    }, []);

    const colors = COLORS[theme];

    const getTheme = async () => {
        const storedTheme = await storage.getItem("THEME");
        if (storedTheme === "dark" || storedTheme === "light") {
            setTheme(storedTheme);
        }
    }

    const onHandleThemeChange = async (newTheme: "light" | "dark") => {
        setTheme(newTheme);
        storage.setItem("THEME", newTheme);
    };

    return { colors, theme, onHandleThemeChange };
}