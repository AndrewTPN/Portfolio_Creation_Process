'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resume', label: 'Resume' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header>
      <div className="logo">Por<span className="accent-dot">folio.</span></div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/contact" className="hire-button">Hire me</Link>
    </header>
  );
}

