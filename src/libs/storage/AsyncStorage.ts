import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageService {

    async setItem(key: string, value: any): Promise<void> {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            console.error("AsyncStorageService -> setItem:", e);
        }
    }

    async getItem<T>(key: string): Promise<T | null> {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.error("AsyncStorageService -> getItem:", error);
            return null;
        }
    }

    async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error("AsyncStorageService -> removeItem:", error);
        }
    }
}

export const storage = new AsyncStorageService();
