import { IProduct } from "../product/iProduct"

export interface ICart {
    items: {
        product: IProduct;
        quantity: number;
    }[]
}