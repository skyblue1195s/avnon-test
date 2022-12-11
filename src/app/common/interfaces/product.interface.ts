export interface IProduct {
    id: string;
    name?: string;
    images?: string;
    price?: number;
    description?: string;
}

export interface IChangeProduct {
    type: string;
    product: IProduct;
}
