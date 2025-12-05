/**
 * OwnerStory Component
 * Trust-building section featuring the boutique owner's story
 */

import { GlassCard } from './GlassCard';
import { CheckCircle, Sparkles, Gem, Award } from 'lucide-react';

const trustBadges = [
  {
    icon: CheckCircle,
    title: 'Personally Selected',
    description: 'Every piece hand-chosen by our founder',
  },
  {
    icon: Sparkles,
    title: 'Limited-Run Items',
    description: 'Exclusive pieces you won\'t find elsewhere',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Sourced from trusted artisan partners',
  },
];

export const OwnerStory = () => {
  return (
    <section className="section-padding bg-gradient-noir relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Owner Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                alt="Fancy Store founder in elegant attire, curating products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <GlassCard 
              padding="sm" 
              className="absolute -bottom-6 -right-6 sm:right-6 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">15+ Years</p>
                <p className="text-xs text-muted-foreground">Curating Excellence</p>
              </div>
            </GlassCard>
          </div>

          {/* Content */}
          <div className="animate-fade-up delay-200">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="heading-lg mb-6 text-foreground">
              A Boutique Built on{' '}
              <span className="text-gradient-gold">Personal Taste.</span>
            </h2>
            <div className="space-y-4 body-md mb-10">
              <p>
                What began as a passion for discovering exceptional, beautifully crafted 
                objects has evolved into Fancy Store—a carefully curated destination for 
                those who appreciate the finer things in life.
              </p>
              <p>
                Every piece in our collection has been personally selected, evaluated 
                for quality, and chosen for its ability to bring joy and elegance to 
                everyday moments. We believe luxury should be accessible, meaningful, 
                and deeply personal.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
