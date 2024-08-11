'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   // Set the CSS custom property for header height
  //   const header = document.querySelector('header');
  //   if (header) {
  //     const height = header.offsetHeight;
  //     document.documentElement.style.setProperty('--header-height', `${height}px`);
  //   }
  // }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-xl font-bold">
            <span className="md:hidden">VS</span>
            <span className="hidden md:inline">Vasin Suksuchit</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item} className="relative">
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  <motion.div
                    className="px-2 py-1"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item}
                  </motion.div>
                </Link>
                {pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                  />
                )}
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button onClick={toggleMenu} className="ml-4 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 bg-background/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={toggleMenu}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;