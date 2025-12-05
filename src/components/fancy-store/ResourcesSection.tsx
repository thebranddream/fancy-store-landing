/**
 * ResourcesSection Component
 * Blog/Guide cards for additional content
 */

import { resources } from '@/lib/mockData';
import { GlassCard } from './GlassCard';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export const ResourcesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="animate-fade-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              Learn
            </p>
            <h2 className="heading-lg text-foreground">
              Style Guides & Tips
            </h2>
          </div>
          <button className="btn-ghost animate-fade-up delay-100 group">
            View All Guides
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <GlassCard
              key={resource.id}
              hover
              padding="none"
              className="overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <article className="group">
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {resource.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      Guide
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {resource.excerpt}
                  </p>
                  
                  {/* CTA */}
                  <button className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all group/btn">
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
