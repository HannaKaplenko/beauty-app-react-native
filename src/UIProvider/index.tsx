import React, { createContext, FC, useContext, useEffect } from "react";
import { useColorTheme } from "./theme/UseColorTheme";
import { IColors } from "./theme/IColors";
import { useLocalization } from "./localization/useLocalization";
import { ILocalization } from "./localization/ILocalization";
import { WishListStore } from "../entities/wishList/WishListModel";

interface UIIContext extends ILocalization {
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
    const { colors, theme, onHandleThemeChange } = useColorTheme();
    const { locales, locale, onHandleChangeLocale, t } = useLocalization();
    useEffect(() => {
        const loadWishList = async () => {
            await WishListStore.getState().getStoredWishlist();
        };
        loadWishList();
    }, []);

    const value = {
        colors,
        theme,
        setTheme: onHandleThemeChange,
        locales,
        locale,
        setLocale: onHandleChangeLocale,
        t
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
} 