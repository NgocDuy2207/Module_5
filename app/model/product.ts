import {ProductType} from './product-type';

export interface Product {
  id?: number;
  name?: string;
  productType: ProductType;
  price?: number;
  date?: string;
}
