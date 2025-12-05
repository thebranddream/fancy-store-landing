/**
 * Fancy Store - Home Page
 * Premium boutique landing experience
 */

import { useState } from 'react';
import { Header } from '@/components/fancy-store/Header';
import { Hero } from '@/components/fancy-store/Hero';
import { OwnerStory } from '@/components/fancy-store/OwnerStory';
import { CollectionsScroller } from '@/components/fancy-store/CollectionsScroller';
import { ProductGrid } from '@/components/fancy-store/ProductGrid';
import { ProductQuickView } from '@/components/fancy-store/ProductQuickView';
import { LifestyleShowcase } from '@/components/fancy-store/LifestyleShowcase';
import { PremiumAssurance } from '@/components/fancy-store/PremiumAssurance';
import { ConsultationForm } from '@/components/fancy-store/ConsultationForm';
import { ResourcesSection } from '@/components/fancy-store/ResourcesSection';
import { Footer } from '@/components/fancy-store/Footer';
import { ToastContainer } from '@/components/fancy-store/Toast';
import { ProductCategory } from '@/lib/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  const handleCategorySelect = (category: ProductCategory | null) => {
    setSelectedCategory(category);
    // Smooth scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Owner Story - Trust Section */}
        <div id="story">
          <OwnerStory />
        </div>

        {/* Collections Browser */}
        <CollectionsScroller 
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        {/* Product Grid with Filters */}
        <ProductGrid initialCategory={selectedCategory} />

        {/* Lifestyle Inspiration */}
        <LifestyleShowcase />

        {/* Trust Badges */}
        <PremiumAssurance />

        {/* Consultation Form */}
        <ConsultationForm />

        {/* Resources/Guides */}
        <div id="resources">
          <ResourcesSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <ProductQuickView />

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Index;
