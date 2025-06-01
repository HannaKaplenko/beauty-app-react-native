import { useState } from "react";
import { COLORS } from "./colors";

export const useColorTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const colors = COLORS[theme];

    return { colors, theme, setTheme };
}