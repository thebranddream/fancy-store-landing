/**
 * ProductGrid Component
 * Responsive grid of product cards with filtering
 */

import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { filterProducts, products, ProductCategory } from '@/lib/mockData';
import { Package } from 'lucide-react';

interface ProductGridProps {
  initialCategory?: ProductCategory | null;
}

export const ProductGrid = ({ initialCategory = null }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [giftableOnly, setGiftableOnly] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  // Update category when initialCategory prop changes
  useMemo(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return filterProducts({
      category: selectedCategory || undefined,
      query: searchQuery,
      giftable: giftableOnly || undefined,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      minPrice: priceRange.min > 0 ? priceRange.min : undefined,
      maxPrice: priceRange.max < 50000 ? priceRange.max : undefined,
    });
  }, [selectedCategory, searchQuery, giftableOnly, selectedTags, priceRange]);

  return (
    <section id="products" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Shop
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            {selectedCategory 
              ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ')} Collection`
              : 'Featured Products'
            }
          </h2>
          <p className="body-md max-w-xl mx-auto">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} carefully selected for discerning tastes.
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          giftableOnly={giftableOnly}
          onGiftableChange={setGiftableOnly}
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="heading-sm text-foreground mb-2">No products found</h3>
            <p className="body-md">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </section>
  );
};
