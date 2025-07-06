export interface ILocalization {
    locales: string[];
    locale: "uk" | "en" | "ru" | string;
    t: (key:string, params?: Record<string, any>) => string;
    setLocale: (value: string) => void;
}