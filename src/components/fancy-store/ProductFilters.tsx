/**
 * ProductFilters Component
 * Filter controls for product grid
 */

import { ProductCategory } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Search, Gift, X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface ProductFiltersProps {
  selectedCategory: ProductCategory | null;
  onCategoryChange: (category: ProductCategory | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  giftableOnly: boolean;
  onGiftableChange: (giftable: boolean) => void;
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

const categories: { value: ProductCategory; label: string }[] = [
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'home-decor', label: 'Home Décor' },
  { value: 'stationery', label: 'Stationery' },
];

const availableTags = [
  'handmade',
  'limited',
  'bestseller',
  'luxury',
  'artisan',
  'vintage',
  'classic',
];

export const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  giftableOnly,
  onGiftableChange,
  selectedTags,
  onTagsChange,
  priceRange,
  onPriceRangeChange,
}: ProductFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    onCategoryChange(null);
    onSearchChange('');
    onGiftableChange(false);
    onTagsChange([]);
    onPriceRangeChange({ min: 0, max: 50000 });
  };

  const hasActiveFilters = 
    selectedCategory !== null || 
    searchQuery !== '' || 
    giftableOnly || 
    selectedTags.length > 0 ||
    priceRange.min > 0 ||
    priceRange.max < 50000;

  return (
    <div className="mb-8 animate-fade-up">
      {/* Search and Main Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="form-input pl-10"
            aria-label="Search products"
          />
        </div>

        {/* Category Select (Mobile) */}
        <select
          value={selectedCategory || ''}
          onChange={(e) => onCategoryChange(e.target.value as ProductCategory || null)}
          className="form-input sm:hidden"
          aria-label="Select category"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        {/* Toggle Filters */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            'flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all',
            isExpanded 
              ? 'bg-primary/10 border-primary/30 text-primary' 
              : 'bg-muted border-border hover:border-white/20'
          )}
          aria-expanded={isExpanded}
          aria-controls="expanded-filters"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {[selectedCategory, giftableOnly, ...selectedTags].filter(Boolean).length + (priceRange.min > 0 || priceRange.max < 50000 ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Category Pills (Desktop) */}
      <div className="hidden sm:flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            selectedCategory === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground hover:bg-muted/80'
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              selectedCategory === cat.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div
          id="expanded-filters"
          className="p-4 rounded-xl bg-card/40 border border-white/10 space-y-6 animate-scale-in"
        >
          {/* Giftable Toggle */}
          <div>
            <button
              onClick={() => onGiftableChange(!giftableOnly)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg border transition-all',
                giftableOnly
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'border-border hover:border-white/20'
              )}
              aria-pressed={giftableOnly}
            >
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Gift-Ready Only</span>
            </button>
          </div>

          {/* Tags */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all',
                    selectedTags.includes(tag)
                      ? 'bg-secondary text-secondary-foreground border border-secondary'
                      : 'bg-muted/50 text-muted-foreground border border-transparent hover:bg-muted'
                  )}
                  aria-pressed={selectedTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">
              Price Range (₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()})
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="sr-only" htmlFor="min-price">Minimum price</label>
                <input
                  id="min-price"
                  type="number"
                  placeholder="Min"
                  value={priceRange.min || ''}
                  onChange={(e) => onPriceRangeChange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                  className="form-input"
                />
              </div>
              <div className="flex-1">
                <label className="sr-only" htmlFor="max-price">Maximum price</label>
                <input
                  id="max-price"
                  type="number"
                  placeholder="Max"
                  value={priceRange.max || ''}
                  onChange={(e) => onPriceRangeChange({ ...priceRange, max: parseInt(e.target.value) || 50000 })}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};
