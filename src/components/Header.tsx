import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-background text-foreground">
      <Link href="/" className="text-2xl font-bold">Vasin Suksuchit</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Header;