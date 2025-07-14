import { create } from 'zustand'
import { IProduct } from '../product/iProduct'
import { storage } from '../../libs/storage/AsyncStorage';

interface IWIshListStore {
    wishList: IProduct[],
    addProduct: (product: IProduct) => Promise<void>;
    removeProducts: (productId: number) => Promise<void>;
    isFavorite: (productId: number) => boolean;
    clear: () => Promise<void>;
    getStoredWishlist: () => Promise<void>;
}

export const WishListStore = create<IWIshListStore>((set, get) => ({
    wishList: [],

    addProduct: async (product: IProduct) => {
        const current = get().wishList;
        const updated = [...current, product];
        await storage.setItem("WishList", updated);
        set({ wishList: updated });
    },

    removeProducts: async (productId: number) => {
        const updated = get().wishList.filter(item => item.id !== productId);
        await storage.setItem("WishList", updated);
        set({ wishList: updated });
    },

    isFavorite: (productId) => {
        const result = !!WishListStore.getState().wishList?.find(item => item.id === productId) as boolean;
        return result;
    },
    clear: async () => {
        await storage.removeItem("WishList");
        set({
            wishList: []
        });
    },
    getStoredWishlist: async () => {
        const stored = await storage.getItem<IProduct[]>("WishList");
        if (stored) {
            set({ wishList: stored });
        }
    }
}));

