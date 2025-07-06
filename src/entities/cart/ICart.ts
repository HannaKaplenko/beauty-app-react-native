import { IProduct } from "../product/iProduct"

export interface ICart {
    items: {
        title: ReactNode;
        price: ReactNode;
        description: ReactNode;
        images: any;
        product: IProduct;
        quantity: number;
    }[]
}