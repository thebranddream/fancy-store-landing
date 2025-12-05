/**
 * LifestyleShowcase Component
 * Lifestyle vignettes showcasing products in context
 */

import { lifestyleVignettes } from '@/lib/mockData';
import { ArrowUpRight } from 'lucide-react';

export const LifestyleShowcase = () => {
  return (
    <section className="section-padding bg-gradient-noir relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Inspiration
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            See the Lifestyle
          </h2>
          <p className="body-md max-w-xl mx-auto">
            Discover how our curated pieces transform spaces and elevate everyday moments.
          </p>
        </div>

        {/* Vignettes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleVignettes.map((vignette, index) => (
            <article
              key={vignette.id}
              className="group relative rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={vignette.image}
                  alt={vignette.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-noir via-deep-noir/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="heading-sm text-foreground mb-2">
                    {vignette.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {vignette.description}
                  </p>
                  <button className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all group/btn">
                    Explore Look
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
