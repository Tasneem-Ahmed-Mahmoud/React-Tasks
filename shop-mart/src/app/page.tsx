"use client";
import Link from "next/link";
import { ArrowRight, Truck, Shield, Headphones, RefreshCw, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/mockData";
export default function Home() {
    const featuredProducts = products.slice(0, 8);
  return (
    <>

      <header className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/*  */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >


              <span className="badge-primary">New Collection 2024</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Welcome to{" "}
                <span className="text-primary">ShopMart</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover premium products at unbeatable prices. Shop the latest trends in electronics, fashion, home goods, and more.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button variant="ghost" size="lg">
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button variant="outline" size="lg">
                    Explore Categories
                  </Button>
                </Link>
              </div>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                  alt="Shopping"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-soft-lg"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </header>



      <section className="products  bg-secondary/50">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Products</h2>
              <p className="text-muted-foreground mt-1">Handpicked products just for you</p>
            </div>


            <Link href="/products">
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>





    </>
  );
}
