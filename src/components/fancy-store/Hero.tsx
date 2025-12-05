/**
 * Hero Component
 * Main hero section with headline, CTAs, and metrics
 */

import { GlassCard } from './GlassCard';
import { heroStats } from '@/lib/mockData';
import { ArrowRight, Calendar } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-noir" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-velvet-plum/20 rounded-full blur-3xl" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide">
              Boutique Collection 2024
            </span>
          </div>

          {/* Main Headline - H1 */}
          <h1 className="heading-xl mb-6 text-foreground animate-fade-up delay-100">
            Where Luxury Becomes{' '}
            <span className="text-gradient-gold">Lifestyle.</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Curated décor, refined accessories, and boutique essentials designed 
            to elevate everyday living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <a
              href="#collections"
              className="btn-primary group"
            >
              Shop Collections
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#consultation"
              className="btn-secondary group"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Book Styling Session
            </a>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up delay-400">
            <GlassCard padding="sm" className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary mb-1">
                {heroStats.collectionsCount}
              </p>
              <p className="text-sm text-muted-foreground">Curated Collections</p>
            </GlassCard>
            
            <GlassCard padding="sm" className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary mb-1">
                {heroStats.customerFavorites}+
              </p>
              <p className="text-sm text-muted-foreground">Customer Favorites</p>
            </GlassCard>
            
            <GlassCard padding="sm" className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary mb-1">
                {heroStats.avgStylingDays}
              </p>
              <p className="text-sm text-muted-foreground">Avg. Styling Days</p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
