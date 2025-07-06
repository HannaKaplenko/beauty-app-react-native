import { create } from 'zustand'
import { ICart } from './ICart'
import { IProduct } from '../product/iProduct'

interface ICartStore {
    cart: ICart,
    updateProduct: (product: IProduct, quantity: number) => void;
    removeProducts: (productId: number) => void;
    clear: () => void;
}

export const CartStore = create<ICartStore>((set) => ({
    cart: { items: [] },
    updateProduct: (product: IProduct, quantity: number) => set((state) => {
        const itemIndex = state.cart.items.findIndex(item => item.product.id === product.id);
        if (itemIndex !== -1) {
            const updatedItems = [...state.cart.items];
            updatedItems[itemIndex].quantity = quantity;
            return { cart: { items: updatedItems } };
        } else {
            return { cart: { items: [...state.cart.items, { product, quantity }] } };
        }
    }),
    removeProducts: (productId: number) => set((state) => ({
        cart: {
            items: state.cart.items.filter(item => item.product.id !== productId)
        }
    })),
    clear: () => set(() => ({
        cart: { items: [] }
    }))
}))


