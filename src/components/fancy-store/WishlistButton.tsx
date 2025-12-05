/**
 * WishlistButton Component
 * Heart button to add/remove items from wishlist
 */

import { Heart } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  productId: string;
  productTitle: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

export const WishlistButton = ({ 
  productId, 
  productTitle,
  className,
  size = 'md' 
}: WishlistButtonProps) => {
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { addToast } = useUIStore();
  const isWishlisted = isInWishlist(productId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(productId);
    
    addToast({
      message: isWishlisted 
        ? `Removed "${productTitle}" from wishlist`
        : `Added "${productTitle}" to wishlist`,
      type: isWishlisted ? 'info' : 'success',
    });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-full transition-all duration-200',
        'bg-background/80 backdrop-blur-sm border border-white/10',
        'hover:bg-background hover:border-white/20 hover:scale-110',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        sizeClasses[size],
        className
      )}
      aria-label={isWishlisted ? `Remove ${productTitle} from wishlist` : `Add ${productTitle} to wishlist`}
      aria-pressed={isWishlisted}
    >
      <Heart
        size={iconSizes[size]}
        className={cn(
          'transition-all duration-200',
          isWishlisted 
            ? 'fill-primary text-primary' 
            : 'text-foreground hover:text-primary'
        )}
      />
    </button>
  );
};
