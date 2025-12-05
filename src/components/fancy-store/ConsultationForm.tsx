/**
 * ConsultationForm Component
 * Lead capture form for styling consultations
 */

import { useState } from 'react';
import { useUIStore } from '@/store/uiStore';
import { GlassCard } from './GlassCard';
import { Calendar, Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  categories: string[];
  budget: string;
  message: string;
}

const occasions = [
  'Birthday',
  'Anniversary',
  'Festive Season',
  'Corporate Gift',
  'Wedding',
  'Custom / Other',
];

const categoryOptions = [
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'home-decor', label: 'Home Décor' },
  { value: 'stationery', label: 'Stationery' },
];

const budgetRanges = [
  'Under ₹5,000',
  '₹5,000 - ₹15,000',
  '₹15,000 - ₹30,000',
  '₹30,000+',
  'Flexible',
];

export const ConsultationForm = () => {
  const { addToast } = useUIStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    categories: [],
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = ['Please select at least one category'];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast({
        message: 'Please fill in all required fields correctly.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    addToast({
      message: 'Your consultation request has been submitted! We will contact you within 24 hours.',
      type: 'success',
      duration: 6000,
    });
  };

  const handleCategoryToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(value)
        ? prev.categories.filter((c) => c !== value)
        : [...prev.categories, value],
    }));
  };

  if (isSubmitted) {
    return (
      <section id="consultation" className="section-padding bg-gradient-noir relative">
        <div className="container-narrow">
          <GlassCard className="max-w-xl mx-auto text-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="heading-md text-foreground mb-4">Request Received</h2>
            <p className="body-md mb-6">
              Thank you for your interest in our styling consultation. Our team will 
              reach out within 24 hours to schedule your session.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Submit Another Request
            </button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="section-padding bg-gradient-noir relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-velvet-plum/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Consultation</span>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Book Your Personal{' '}
              <span className="text-gradient-gold">Styling Session</span>
            </h2>
            <div className="space-y-4 body-md mb-8">
              <p>
                Not sure what to choose? Let our styling experts guide you to the 
                perfect selection for any occasion.
              </p>
              <p>
                Whether you're shopping for yourself or seeking the ideal gift, 
                we'll help you discover pieces that tell your story.
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                'Personalized product recommendations',
                'Gift curation for special occasions',
                'Home styling advice',
                'Budget-conscious options',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <GlassCard className="animate-fade-up delay-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={cn('form-input', errors.name && 'border-destructive')}
                  placeholder="Your name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn('form-input', errors.email && 'border-destructive')}
                    placeholder="you@email.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={cn('form-input', errors.phone && 'border-destructive')}
                    placeholder="+91 98765 43210"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="form-label">
                  Occasion <span className="text-destructive">*</span>
                </label>
                <select
                  id="occasion"
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className={cn('form-input', errors.occasion && 'border-destructive')}
                  aria-describedby={errors.occasion ? 'occasion-error' : undefined}
                >
                  <option value="">Select an occasion</option>
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>{occ}</option>
                  ))}
                </select>
                {errors.occasion && (
                  <p id="occasion-error" className="text-xs text-destructive mt-1">
                    {errors.occasion}
                  </p>
                )}
              </div>

              {/* Categories */}
              <div>
                <p className="form-label">
                  Preferred Categories <span className="text-destructive">*</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => handleCategoryToggle(cat.value)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                        formData.categories.includes(cat.value)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      )}
                      aria-pressed={formData.categories.includes(cat.value)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                {errors.categories && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.categories[0]}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="form-label">Budget Range</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-input"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input min-h-[100px] resize-none"
                  placeholder="Tell us more about what you're looking for..."
                  rows={4}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Request Consultation
                  </span>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
