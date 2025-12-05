/**
 * Header Component
 * Navigation header with logo, links, and wishlist
 */

import { useState, useEffect } from 'react';
import { Heart, Menu, X, Search } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Book Styling', href: '#consultation' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useWishlistStore();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMobileMenu]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              Fancy<span className="text-primary">Store</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <a
              href="#wishlist"
              className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label={`Wishlist (${items.length} items)`}
            >
              <Heart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                  {items.length > 9 ? '9+' : items.length}
                </span>
              )}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
