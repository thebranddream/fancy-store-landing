/**
 * PremiumAssurance Component
 * Trust badges and quality assurance section
 */

import { GlassCard } from './GlassCard';
import { Shield, Sparkles, Gift, Headphones } from 'lucide-react';

const assurances = [
  {
    icon: Shield,
    title: 'Authentic Materials',
    description: 'Every piece verified for genuine quality and origin. We work only with trusted suppliers.',
  },
  {
    icon: Sparkles,
    title: 'Boutique Curation',
    description: 'Hand-selected by our founder. Each item meets our exacting standards for design and craftsmanship.',
  },
  {
    icon: Gift,
    title: 'Gift-Wrapping Available',
    description: 'Complimentary premium gift packaging with personalized notes for that special touch.',
  },
  {
    icon: Headphones,
    title: 'Concierge Support',
    description: 'Personal assistance via WhatsApp or email. We help you find the perfect piece.',
  },
];

export const PremiumAssurance = () => {
  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-velvet-plum/5 to-transparent" />
      
      <div className="container-narrow relative">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Our Promise
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            The Fancy Store Difference
          </h2>
          <p className="body-md max-w-xl mx-auto">
            When you shop with us, you're choosing quality, authenticity, and exceptional service.
          </p>
        </div>

        {/* Assurance Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {assurances.map((assurance, index) => (
            <GlassCard
              key={assurance.title}
              hover
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <assurance.icon className="w-6 h-6 text-deep-noir" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{assurance.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {assurance.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
