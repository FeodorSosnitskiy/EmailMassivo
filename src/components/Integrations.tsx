import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Integrations = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    { name: 'Shopify', logo: '🛍️', color: 'from-green-400 to-green-600' },
    { name: 'WordPress', logo: '📝', color: 'from-blue-400 to-blue-600' },
    { name: 'Salesforce', logo: '☁️', color: 'from-cyan-400 to-cyan-600' },
    { name: 'HubSpot', logo: '🎯', color: 'from-orange-400 to-orange-600' },
    { name: 'Stripe', logo: '💳', color: 'from-purple-400 to-purple-600' },
    { name: 'Google Analytics', logo: '📊', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Facebook', logo: '👥', color: 'from-blue-500 to-blue-700' },
    { name: 'Instagram', logo: '📸', color: 'from-pink-400 to-pink-600' },
    { name: 'Slack', logo: '💬', color: 'from-green-500 to-green-700' },
    { name: 'Zapier', logo: '⚡', color: 'from-orange-500 to-orange-700' },
    { name: 'WooCommerce', logo: '🛒', color: 'from-purple-500 to-purple-700' },
    { name: 'Mailchimp', logo: '🐵', color: 'from-yellow-500 to-yellow-700' },
  ];

  return (
    <section id="integrations" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="integration-card group"
            >
              <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${integration.color} rounded-lg flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-200`}>
                {integration.logo}
              </div>
              <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-200">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* API Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-card to-card-hover rounded-2xl p-8 md:p-12 border border-border shadow-[var(--shadow-medium)]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
              Need a Custom Integration?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our powerful REST API and SMTP service to connect EmailFlow with any platform. 
              Available in both free and premium plans.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/50 rounded-xl p-6 border border-border/50">
                <h4 className="font-bold text-lg mb-3 text-foreground">REST API</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Full programmatic access to all EmailFlow features
                </p>
                <div className="text-xs text-muted-foreground text-left">
                  <code className="bg-muted px-2 py-1 rounded">
                    POST /api/v1/campaigns/send
                  </code>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-xl p-6 border border-border/50">
                <h4 className="font-bold text-lg mb-3 text-foreground">SMTP Service</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Send transactional emails from your applications
                </p>
                <div className="text-xs text-muted-foreground text-left">
                  <code className="bg-muted px-2 py-1 rounded">
                    smtp.emailflow.com:587
                  </code>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;