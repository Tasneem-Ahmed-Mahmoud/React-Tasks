import React from 'react'
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
// import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface ProductCardProps {
    product: any;
    index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {



    const inWishlist = true;

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault();

    };
    return (
        <>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                <Link href="/products/[slug]" as={`/products/${product.slug}`} className="block product-card group "> 
                    <div className="relative aspect-square overflow-hidden bg-secondary">

                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* discount */}

                        <div className="absolute top-3 left-3 badge-primary">
                            -3%
                        </div>

                        {/* Quick Actions */}

                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                                variant="ghost"
                                size="icon"
                                //   onClick={handleWishlistToggle}
                                className={cn(
                                    "w-9 h-9 rounded-full bg-background shadow-md",
                                    inWishlist && "text-destructive"
                                )}
                            >
                                <Heart className={cn("w-4 h-4", inWishlist && "fill-current")} />
                            </Button>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <Button
                                variant="default"
                                className="w-full"
                            //   onClick={handleAddToCart}
                            >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                            </Button>
                        </div>



                    </div>


                    <div className="p-4">
                        {/* Category */}
                        <p className="text-xs text-muted-foreground mb-1">{product.category.name}</p>

                        {/* Title */}
                        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                            {product.title}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="text-sm font-medium">{product.ratingsAverage}</span>
                            <span className="text-xs text-muted-foreground">({product.ratingsQuantity})</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">$4</span>
                            {/* {product.priceBeforeDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.priceBeforeDiscount}
              </span>
            )} */}
                        </div>
                    </div>



                </Link>




            </motion.div >




        </>
    )
}
