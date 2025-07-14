import { create } from 'zustand'
import { IProduct } from '../product/iProduct'

interface IWIshListStore {
    wishList: IProduct[],
    addProduct: (product: IProduct) => void;
    removeProducts: (productId: number) => void;
    clear: () => void;
}

export const WishListStore = create<IWIshListStore>((set) => ({
    wishList: [],
    addProduct: (product: IProduct) => set((state) => {
        return { wishList: [...state.wishList, product] };
    }),
    removeProducts: (productId: number) => set((state) => ({
        wishList: state.wishList.filter(item => item.id !== productId)
    })),
    clear: () => set(() => ({
        wishList: []
    }))
}));


