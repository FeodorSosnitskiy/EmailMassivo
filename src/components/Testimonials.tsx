import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      avatar: '👩‍💼',
      rating: 5,
      text: 'EmailFlow transformed our email marketing completely. The automation features saved us 15 hours per week, and our open rates increased by 127%. The analytics are incredibly detailed and actionable.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'E-commerce Manager',
      company: 'StyleCraft Store',
      avatar: '👨‍💻',
      rating: 5,
      text: 'The segmentation capabilities are game-changing. We can now send personalized emails to different customer groups, resulting in a 89% increase in click-through rates. Customer support is fantastic too.',
    },
    {
      name: 'Emma Thompson',
      role: 'Startup Founder',
      company: 'GreenTech Innovations',
      avatar: '👩‍🚀',
      rating: 5,
      text: 'As a startup, the free tier with 500 subscribers was perfect for us to get started. The templates are beautiful and the drag-and-drop editor makes creating emails so easy. Highly recommended!',
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="feature-card relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50,000+', label: 'Active Users' },
            { number: '10M+', label: 'Emails Sent' },
            { number: '127%', label: 'Avg. Open Rate Increase' },
            { number: '4.9/5', label: 'Customer Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;