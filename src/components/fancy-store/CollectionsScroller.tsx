/**
 * CollectionsScroller Component
 * Horizontal scrolling collection cards
 */

import { collections, ProductCategory } from '@/lib/mockData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CollectionsScrollerProps {
  onCategorySelect: (category: ProductCategory | null) => void;
  selectedCategory: ProductCategory | null;
}

export const CollectionsScroller = ({ 
  onCategorySelect, 
  selectedCategory 
}: CollectionsScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="collections" className="section-padding relative">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="animate-fade-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              Browse By
            </p>
            <h2 className="heading-lg text-foreground">
              Our Collections
            </h2>
          </div>
          
          {/* Scroll Controls */}
          <div className="flex gap-2 animate-fade-up delay-100">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                'w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all',
                canScrollLeft 
                  ? 'hover:bg-white/10 hover:border-white/20' 
                  : 'opacity-30 cursor-not-allowed'
              )}
              aria-label="Scroll collections left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                'w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all',
                canScrollRight 
                  ? 'hover:bg-white/10 hover:border-white/20' 
                  : 'opacity-30 cursor-not-allowed'
              )}
              aria-label="Scroll collections right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Product collections"
        >
          {/* All Products Card */}
          <button
            onClick={() => onCategorySelect(null)}
            className={cn(
              'flex-shrink-0 w-72 snap-start group relative overflow-hidden rounded-2xl',
              'transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              selectedCategory === null && 'ring-2 ring-primary'
            )}
            role="listitem"
          >
            <div className="aspect-[3/4] relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                alt="All collections showcase"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-noir via-deep-noir/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-primary font-medium mb-2">Browse All</p>
                <h3 className="heading-sm text-foreground mb-2">Featured Products</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover our complete collection
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          </button>

          {collections.map((collection, index) => (
            <button
              key={collection.id}
              onClick={() => onCategorySelect(collection.category)}
              className={cn(
                'flex-shrink-0 w-72 snap-start group relative overflow-hidden rounded-2xl',
                'transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                'animate-fade-up',
                selectedCategory === collection.category && 'ring-2 ring-primary'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={collection.image}
                  alt={`${collection.name} collection`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-noir via-deep-noir/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary font-medium mb-2">
                    {collection.productCount} Items
                  </p>
                  <h3 className="heading-sm text-foreground mb-2">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    View Collection <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
