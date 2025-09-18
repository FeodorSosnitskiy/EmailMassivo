import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { key: 'Features', href: '#features' },
      { key: 'Pricing', href: '#pricing' },
      { key: 'Integrations', href: '#integrations' },
      { key: 'API Docs', href: '#' },
    ],
    company: [
      { key: 'About Us', href: '#' },
      { key: 'Blog', href: '#' },
      { key: 'Careers', href: '#' },
      { key: 'Contact', href: '#contact' },
    ],
    legal: [
      { key: t('footer.legal.privacy'), href: '#' },
      { key: t('footer.legal.terms'), href: '#' },
      { key: t('footer.legal.security'), href: '#' },
      { key: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gradient">EmailFlow</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card hover:bg-card-hover border border-border rounded-lg flex items-center justify-center transition-colors duration-200 hover:border-primary"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 EmailFlow. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>🔒 Enterprise-grade security</span>
            <span>📍 Global infrastructure</span>
            <span>⚡ 99.9% uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;