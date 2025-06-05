import React, {Dispatch, SetStateAction} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check, Star, Heart } from "lucide-react"
import { Product, CartCheck, CartAction } from "@/types/index"

interface ProductProps {
  product: Product;
  addToCart: CartAction;
  removeFromCart: CartAction;
  isInCart: CartCheck;
  cart: number[];
  setCart: Dispatch<SetStateAction<number[]>>;
}

const ProductCard = ({product, addToCart, removeFromCart, isInCart, cart, setCart}: ProductProps) => {
  return (
             <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      {product.category}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h4>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-green-200 text-green-700">
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-800">{product.price} ₴</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice} ₴</span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => (isInCart(product.id, cart) ? removeFromCart(product.id, cart, setCart) : addToCart(product.id, cart, setCart))}
                    className={`w-full transition-all duration-300 ${
                      isInCart(product.id, cart)
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white"
                    }`}
                  >
                    {isInCart(product.id, cart) ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />У кошику
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Додати до кошика
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
  )
}

export default ProductCard