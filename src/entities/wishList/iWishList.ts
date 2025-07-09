import { IProduct } from "../product/iProduct"

export interface IWishList {
    items: {
        product: IProduct;
        quantity: number;
    }[]
}