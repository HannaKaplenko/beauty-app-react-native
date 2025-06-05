import React, { createContext, FC, useContext } from "react";
import { useColorTheme } from "./theme/UseColorTheme";
import { IColors } from "./theme/IColors";

interface UIIContext {
    colors: IColors;
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

export const UIContext = createContext<UIIContext>({} as any);

export const useUIContext = () => {
    return useContext(UIContext);
};

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export const UIProvider: FC<IProps> = ({ children }) => {
    const { colors, theme, onHandleThemeChange} = useColorTheme();
    const value = { colors, theme, setTheme: onHandleThemeChange };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}