"use client";
import { CartCheck, CartAction } from "@/types/index"

export const addToCart: CartAction = (productId, cart, setCart) => {
  if (!cart.includes(productId)) {
    setCart([...cart, productId]);
  }
};

export const removeFromCart: CartAction = (productId, cart, setCart) => {
  setCart(cart?.filter((id) => id !== productId));
};

export const isInCart: CartCheck = (productId, cart) => {
  return cart?.includes(productId);
};