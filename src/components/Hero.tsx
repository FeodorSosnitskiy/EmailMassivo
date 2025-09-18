import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Upload, Zap, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-dashboard.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Upload,
      key: 'upload'
    },
    {
      icon: Zap,
      key: 'create'
    },
    {
      icon: BarChart3,
      key: 'analyze'
    }
  ];

  return (
    <section className="section-padding pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-success/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              🚀 Now with AI-powered automation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">{t('hero.title')}</span>
              <br />
              <span className="text-foreground">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero text-lg px-8 py-4">
                {t('hero.cta.primary')}
              </Button>
              <Button variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                {t('hero.cta.secondary')}
              </Button>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium">Step {index + 1}</span>
                    <p className="text-sm font-semibold text-foreground">
                      {t(`hero.features.${feature.key}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImage}
                alt="EmailFlow Dashboard"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-success text-success-foreground rounded-lg px-3 py-2 text-sm font-semibold shadow-[var(--shadow-accent)]"
            >
              📈 +127% Open Rate
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-3 text-sm font-semibold shadow-[var(--shadow-medium)]"
            >
              🎯 Real-time Analytics
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;