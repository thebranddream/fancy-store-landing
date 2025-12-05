/**
 * ProductQuickView Component
 * Modal with detailed product information and image carousel
 */

import { useUIStore } from '@/store/uiStore';
import { getProductById } from '@/lib/mockData';
import { WishlistButton } from './WishlistButton';
import { X, ChevronLeft, ChevronRight, Gift, Ruler, Package, Clock } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export const ProductQuickView = () => {
  const { isQuickViewOpen, quickViewProductId, closeQuickView } = useUIStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = quickViewProductId ? getProductById(quickViewProductId) : null;

  // Handle escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeQuickView();
    }
    if (e.key === 'ArrowLeft' && product && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
    if (e.key === 'ArrowRight' && product && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [closeQuickView, product]);

  useEffect(() => {
    if (isQuickViewOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isQuickViewOpen, handleKeyDown]);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [quickViewProductId]);

  if (!isQuickViewOpen || !product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-noir/90 backdrop-blur-sm animate-fade-in"
        onClick={closeQuickView}
        aria-hidden="true"
      />

      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-card animate-scale-in"
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          <div className="relative bg-muted aspect-square md:aspect-auto md:h-full">
            <img
              src={product.images[currentImageIndex]}
              alt={product.altText}
              className="w-full h-full object-cover"
            />

            {/* Image Navigation */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all',
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-white/40 hover:bg-white/60'
                      )}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === currentImageIndex}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="product-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title & Price */}
            <div>
              <h2 id="quick-view-title" className="heading-md text-foreground mb-2">
                {product.title}
              </h2>
              <p className="price-tag text-2xl">{product.priceDisplay}</p>
            </div>

            {/* Description */}
            <p className="body-md">{product.longDescription}</p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Material</p>
                  <p className="text-sm text-foreground">{product.material}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Ruler className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dimensions</p>
                  <p className="text-sm text-foreground">{product.dimensions}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lead Time</p>
                  <p className="text-sm text-foreground">{product.leadTimeDays} days</p>
                </div>
              </div>

              {product.giftable && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Gift Ready</p>
                    <p className="text-sm text-foreground">Wrapping available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={cn(
                'w-2 h-2 rounded-full',
                product.stock > 5 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
              )} />
              <span className="text-sm text-muted-foreground">
                {product.stock > 5 
                  ? 'In Stock' 
                  : product.stock > 0 
                    ? `Only ${product.stock} left`
                    : 'Out of Stock'
                }
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4">
              <WishlistButton
                productId={product.id}
                productTitle={product.title}
                size="lg"
              />
              <button className="btn-primary flex-1">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
