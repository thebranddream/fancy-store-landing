/**
 * Footer Component
 * Site footer with contact info, links, and social
 */

import { MessageCircle, Mail, Phone, Instagram, ExternalLink } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'Jewelry', href: '#products' },
    { label: 'Accessories', href: '#products' },
    { label: 'Home Décor', href: '#products' },
    { label: 'Stationery', href: '#products' },
  ],
  company: [
    { label: 'Our Story', href: '#story' },
    { label: 'Gift Services', href: '#consultation' },
    { label: 'Style Guides', href: '#resources' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Fancy<span className="text-primary">Store</span>
              </h2>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              A boutique destination for those who appreciate the finer things in life. 
              Curated with care, delivered with love.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                WhatsApp Us
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:hello@fancystore.in"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@fancystore.in
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Fancy Store. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/fancystore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com/fancystore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 hover:text-primary transition-colors"
              aria-label="Follow us on Pinterest"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
