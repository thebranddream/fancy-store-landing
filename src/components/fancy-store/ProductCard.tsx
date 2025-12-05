/**
 * ProductCard Component
 * Individual product display card with quick view option
 */

import { Product } from '@/lib/mockData';
import { WishlistButton } from './WishlistButton';
import { Eye } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { openQuickView } = useUIStore();

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    openQuickView(product.id);
  };

  return (
    <article
      className={cn(
        'group relative rounded-xl overflow-hidden bg-card/40 border border-white/5',
        'transition-all duration-300 hover:border-white/10 hover:shadow-card',
        'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-deep-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <button
          onClick={handleQuickView}
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'flex items-center gap-2 px-4 py-2 rounded-lg',
            'bg-background/90 backdrop-blur-sm border border-white/20',
            'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0',
            'transition-all duration-300',
            'hover:bg-background hover:border-white/30',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
          )}
          aria-label={`Quick view ${product.title}`}
        >
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium">Quick View</span>
        </button>

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3">
          <WishlistButton 
            productId={product.id} 
            productTitle={product.title}
            size="sm"
          />
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="product-tag text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="price-tag text-lg">{product.priceDisplay}</span>
          {product.giftable && (
            <span className="text-xs text-muted-foreground">Gift-ready</span>
          )}
        </div>
      </div>
    </article>
  );
};
