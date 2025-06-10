export interface ILocalization {
    locales: string[];
    locale: string;
    t: (key:string, params?: Record<string, any>) => string;
    setLocale: (value: "uk" | "en" | "ru") => void;
}