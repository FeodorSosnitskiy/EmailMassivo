import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TrialDialog from '@/components/TrialDialog';

const Pricing = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      type: 'free',
      featured: false,
      features: [
        'pricing.free.feature1',
        'pricing.free.feature2',
        'pricing.free.feature3',
        'pricing.free.feature4',
      ]
    },
    {
      type: 'premium',
      featured: true,
      features: [
        'pricing.premium.feature1',
        'pricing.premium.feature2',
        'pricing.premium.feature3',
        'pricing.premium.feature4',
        'pricing.premium.feature5',
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''} relative`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  {t(`pricing.${plan.type}.title`)}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {t(`pricing.${plan.type}.price`)}
                  </span>
                  {plan.type === 'free' && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {t(`pricing.${plan.type}.description`)}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success-foreground" />
                    </div>
                    <span className="text-foreground">{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.featured ? 'btn-hero' : 'btn-hero-outline'}`}
                size="lg"
                onClick={() => setIsDialogOpen(true)}
              >
                {t('pricing.cta')}
              </Button>
            </motion.div>
          ))}
        </div>

        <TrialDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground">
            🎯 <strong>Perfect for small businesses:</strong> If your database has fewer than 500 contacts, 
            use all our features completely free!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;