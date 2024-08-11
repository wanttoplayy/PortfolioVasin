'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-4 bg-background text-foreground">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" className="text-2xl font-bold">Vasin Suksuchit</Link>
      </motion.div>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
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
    </header>
  );
};

export default Header;