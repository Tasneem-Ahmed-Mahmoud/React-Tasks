"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navLinks = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Products",
      href: "/products"
    },

    {
      name: "About",
      href: "/about"
    },
    {
      name: "Contact",
      href: "/contact"
    }

  ];
  return (
    <>

      <nav className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="container mx-auto py-5">
          <div className="flex items-center justify-between  ">


            {/* logo */}
            <Link href="/" className="flex items-center gap-2">

              <div className="  bg-primary flex items-center justify-center w-10 h-10 rounded-lg">
                <span className="text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                Shop Mart
              </span>
            </Link>

            {/* links */}

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >

                  {link.name}

                </Link>
              ))}
            </div>

            {/* search */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  // value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 bg-secondary border-0 focus-visible:ring-1"
                />
              </div>
            </div>

            {/* actions */}

            <div className="flex items-center gap-2">
              <Link href="/wishlist" className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">5</span>

                </Button>
              </Link>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="sr-only">8</span>
                </Button>
              </Link>

              {/* <Link href="/profile">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link> */}

              <Link href="/signin" className="hidden sm:block">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container-custom py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 bg-secondary border-0"
                />
              </div>
              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-4 rounded-lg hover:bg-secondary text-foreground font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* {!isAuthenticated && ( */}
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-center mt-2"
                  >
                    Sign In
                  </Link>
                {/* )} */}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>


    </>
  )
}
