import React from 'react';
import { Zap, BarChart3, Palette, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      titleKey: 'automation',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: BarChart3,
      titleKey: 'analytics',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      icon: Palette,
      titleKey: 'templates',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: Target,
      titleKey: 'segmentation',
      gradient: 'from-green-400 to-blue-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {t(`features.${feature.titleKey}.title`)}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {t(`features.${feature.titleKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-accent">Segment & Personalize</span> —<br />
              Send emails to those who truly care!
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't send the same email to your entire database. Create targeted groups of recipients 
              to deliver relevant content to the right people at the perfect moment. 
              These emails get higher open rates and more clicks.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground font-medium">Behavioral targeting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground font-medium">Dynamic content insertion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground font-medium">A/B testing built-in</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-card-hover rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">Email Segments</h4>
                  <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">High Engagement Users</span>
                      <span className="text-sm text-muted-foreground">1,247 contacts</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Recent Purchasers</span>
                      <span className="text-sm text-muted-foreground">543 contacts</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Re-engagement Campaign</span>
                      <span className="text-sm text-muted-foreground">2,134 contacts</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;