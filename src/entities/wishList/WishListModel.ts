import { create } from 'zustand'
import { IProduct } from '../product/iProduct'
import { IWishList } from './iWishList';

interface IWIshListStore {
    wishList: IWishList,
    updateProduct: (product: IProduct, quantity: number) => void;
    removeProducts: (productId: number) => void;
    clear: () => void;
}

export const wishListStore = create<IWIshListStore>((set) => ({
    wishList: { items: [] },
    updateProduct: (product: IProduct, quantity: number) => set((state) => {
        const itemIndex = state.wishList.items.findIndex(item => item.product.id === product.id);
        if (itemIndex !== -1) {
            const updatedItems = [...state.wishList.items];
            updatedItems[itemIndex].quantity = quantity;
            return { wishList: { items: updatedItems } };
        } else {
            return { wishList: { items: [...state.wishList.items, { product, quantity }] } };
        }
    }),
    removeProducts: (productId: number) => set((state) => ({
        wishList: {
            items: state.wishList.items.filter(item => item.product.id !== productId)
        }
    })),
    clear: () => set(() => ({
        wishList: { items: [] }
    }))
}))


