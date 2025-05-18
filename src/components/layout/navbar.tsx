"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import React from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const NavLinks = ({ className }: { className?: string }) => (
    <>
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} passHref legacyBehavior>
          <motion.a
            onClick={handleLinkClick}
            className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        </Link>
      ))}
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" passHref legacyBehavior>
            <a className="text-2xl font-bold text-primary">NiteshRatre</a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <ThemeToggleButton />
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center">
            <ThemeToggleButton />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background p-6">
                <div className="flex flex-col space-y-4 mt-6">
                 <NavLinks className="block text-lg" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
