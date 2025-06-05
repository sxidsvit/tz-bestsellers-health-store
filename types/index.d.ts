import { Dispatch, SetStateAction } from "react";
declare export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  benefits: string[]
}

declare export type Referrer = string | null

declare export type CartAction = (
  productId: number,
  cart: number[],
  setCart: Dispatch<SetStateAction<number[]>>
) => void;

declare export type CartCheck = (productId: number, cart: number[]) => boolean;