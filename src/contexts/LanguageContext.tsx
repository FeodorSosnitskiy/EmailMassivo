import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.integrations': 'Integrations',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Smart Email Marketing',
    'hero.subtitle': 'That Actually Works',
    'hero.description': 'Transform your email marketing with AI-powered automation, advanced analytics, and beautiful templates. Start free with up to 500 subscribers.',
    'hero.cta.primary': 'Start Free Trial',
    'hero.cta.secondary': 'Watch Demo',
    'hero.features.upload': 'Upload Your Database',
    'hero.features.create': 'Create Your Campaign',
    'hero.features.analyze': 'Analyze Results',
    
    // Features
    'features.title': 'Everything You Need for Email Marketing',
    'features.subtitle': 'Powerful tools to create, send, and optimize your email campaigns',
    'features.automation.title': 'Smart Automation',
    'features.automation.description': 'Set up intelligent email sequences that respond to user behavior and drive conversions automatically.',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.description': 'Get detailed insights into open rates, click-through rates, and conversion metrics with real-time reporting.',
    'features.templates.title': 'Beautiful Templates',
    'features.templates.description': 'Choose from hundreds of responsive email templates or create your own with our drag-and-drop editor.',
    'features.segmentation.title': 'Smart Segmentation',
    'features.segmentation.description': 'Target the right audience with AI-powered segmentation based on behavior, preferences, and engagement.',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your business needs',
    'pricing.free.title': 'Free',
    'pricing.free.price': '$0',
    'pricing.free.description': 'Perfect for getting started',
    'pricing.free.feature1': 'Up to 500 subscribers',
    'pricing.free.feature2': '2,000 emails per month',
    'pricing.free.feature3': 'Basic templates',
    'pricing.free.feature4': 'Email support',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': 'Custom',
    'pricing.premium.description': 'For growing businesses',
    'pricing.premium.feature1': 'Unlimited subscribers',
    'pricing.premium.feature2': 'Unlimited emails',
    'pricing.premium.feature3': 'Advanced automation',
    'pricing.premium.feature4': 'Priority support',
    'pricing.premium.feature5': 'Custom integrations',
    'pricing.cta': 'Get Started',
    
    // Testimonials
    'testimonials.title': 'Trusted by Thousands',
    'testimonials.subtitle': 'See what our customers say about EmailFlow',
    
    // Integrations
    'integrations.title': 'Seamless Integrations',
    'integrations.subtitle': 'Connect with your favorite tools and platforms',
    
    // Contact
    'contact.title': 'Ready to Get Started?',
    'contact.subtitle': 'Join thousands of businesses using EmailFlow to grow their audience',
    'contact.email.placeholder': 'Enter your email address',
    'contact.cta': 'Start Free Trial',
    
    // Footer
    'footer.description': 'The smart email marketing platform that helps businesses grow.',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.security': 'Security',
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.integrations': 'Integraciones',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Marketing de Email Inteligente',
    'hero.subtitle': 'Que Realmente Funciona',
    'hero.description': 'Transforma tu marketing por email con automatización impulsada por IA, análisis avanzados y plantillas hermosas. Comienza gratis con hasta 500 suscriptores.',
    'hero.cta.primary': 'Prueba Gratuita',
    'hero.cta.secondary': 'Ver Demo',
    'hero.features.upload': 'Sube Tu Base de Datos',
    'hero.features.create': 'Crea Tu Campaña',
    'hero.features.analyze': 'Analiza Resultados',
    
    // Features
    'features.title': 'Todo Lo Que Necesitas para Email Marketing',
    'features.subtitle': 'Herramientas poderosas para crear, enviar y optimizar tus campañas de email',
    'features.automation.title': 'Automatización Inteligente',
    'features.automation.description': 'Configura secuencias de email inteligentes que responden al comportamiento del usuario y generan conversiones automáticamente.',
    'features.analytics.title': 'Análisis Avanzados',
    'features.analytics.description': 'Obtén información detallada sobre tasas de apertura, clics y métricas de conversión con reportes en tiempo real.',
    'features.templates.title': 'Plantillas Hermosas',
    'features.templates.description': 'Elige entre cientos de plantillas de email responsivas o crea las tuyas con nuestro editor de arrastrar y soltar.',
    'features.segmentation.title': 'Segmentación Inteligente',
    'features.segmentation.description': 'Dirige a la audiencia correcta con segmentación impulsada por IA basada en comportamiento, preferencias y engagement.',
    
    // Pricing
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Elige el plan que se adapte a las necesidades de tu negocio',
    'pricing.free.title': 'Gratis',
    'pricing.free.price': '$0',
    'pricing.free.description': 'Perfecto para comenzar',
    'pricing.free.feature1': 'Hasta 500 suscriptores',
    'pricing.free.feature2': '2,000 emails por mes',
    'pricing.free.feature3': 'Plantillas básicas',
    'pricing.free.feature4': 'Soporte por email',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': 'Personalizado',
    'pricing.premium.description': 'Para negocios en crecimiento',
    'pricing.premium.feature1': 'Suscriptores ilimitados',
    'pricing.premium.feature2': 'Emails ilimitados',
    'pricing.premium.feature3': 'Automatización avanzada',
    'pricing.premium.feature4': 'Soporte prioritario',
    'pricing.premium.feature5': 'Integraciones personalizadas',
    'pricing.cta': 'Comenzar',
    
    // Testimonials
    'testimonials.title': 'Confiado por Miles',
    'testimonials.subtitle': 'Ve lo que dicen nuestros clientes sobre EmailFlow',
    
    // Integrations
    'integrations.title': 'Integraciones Perfectas',
    'integrations.subtitle': 'Conecta con tus herramientas y plataformas favoritas',
    
    // Contact
    'contact.title': '¿Listo para Comenzar?',
    'contact.subtitle': 'Únete a miles de negocios que usan EmailFlow para hacer crecer su audiencia',
    'contact.email.placeholder': 'Ingresa tu dirección de email',
    'contact.cta': 'Prueba Gratuita',
    
    // Footer
    'footer.description': 'La plataforma de marketing por email inteligente que ayuda a los negocios a crecer.',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.terms': 'Términos de Servicio',
    'footer.legal.security': 'Seguridad',
  },
  pt: {
    // Navigation
    'nav.features': 'Recursos',
    'nav.pricing': 'Preços',
    'nav.testimonials': 'Depoimentos',
    'nav.integrations': 'Integrações',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Marketing de Email Inteligente',
    'hero.subtitle': 'Que Realmente Funciona',
    'hero.description': 'Transforme seu marketing por email com automação com IA, análises avançadas e templates lindos. Comece grátis com até 500 assinantes.',
    'hero.cta.primary': 'Teste Grátis',
    'hero.cta.secondary': 'Ver Demo',
    'hero.features.upload': 'Carregue Sua Base de Dados',
    'hero.features.create': 'Crie Sua Campanha',
    'hero.features.analyze': 'Analise Resultados',
    
    // Features
    'features.title': 'Tudo Que Você Precisa para Email Marketing',
    'features.subtitle': 'Ferramentas poderosas para criar, enviar e otimizar suas campanhas de email',
    'features.automation.title': 'Automação Inteligente',
    'features.automation.description': 'Configure sequências de email inteligentes que respondem ao comportamento do usuário e geram conversões automaticamente.',
    'features.analytics.title': 'Análises Avançadas',
    'features.analytics.description': 'Obtenha insights detalhados sobre taxas de abertura, cliques e métricas de conversão com relatórios em tempo real.',
    'features.templates.title': 'Templates Lindos',
    'features.templates.description': 'Escolha entre centenas de templates de email responsivos ou crie os seus com nosso editor drag-and-drop.',
    'features.segmentation.title': 'Segmentação Inteligente',
    'features.segmentation.description': 'Alcance a audiência certa com segmentação por IA baseada em comportamento, preferências e engajamento.',
    
    // Pricing
    'pricing.title': 'Preços Simples e Transparentes',
    'pricing.subtitle': 'Escolha o plano que se adapta às necessidades do seu negócio',
    'pricing.free.title': 'Grátis',
    'pricing.free.price': 'R$ 0',
    'pricing.free.description': 'Perfeito para começar',
    'pricing.free.feature1': 'Até 500 assinantes',
    'pricing.free.feature2': '2.000 emails por mês',
    'pricing.free.feature3': 'Templates básicos',
    'pricing.free.feature4': 'Suporte por email',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': 'Personalizado',
    'pricing.premium.description': 'Para negócios em crescimento',
    'pricing.premium.feature1': 'Assinantes ilimitados',
    'pricing.premium.feature2': 'Emails ilimitados',
    'pricing.premium.feature3': 'Automação avançada',
    'pricing.premium.feature4': 'Suporte prioritário',
    'pricing.premium.feature5': 'Integrações personalizadas',
    'pricing.cta': 'Começar',
    
    // Testimonials
    'testimonials.title': 'Confiado por Milhares',
    'testimonials.subtitle': 'Veja o que nossos clientes dizem sobre EmailFlow',
    
    // Integrations
    'integrations.title': 'Integrações Perfeitas',
    'integrations.subtitle': 'Conecte com suas ferramentas e plataformas favoritas',
    
    // Contact
    'contact.title': 'Pronto para Começar?',
    'contact.subtitle': 'Junte-se a milhares de negócios usando EmailFlow para expandir sua audiência',
    'contact.email.placeholder': 'Digite seu endereço de email',
    'contact.cta': 'Teste Grátis',
    
    // Footer
    'footer.description': 'A plataforma de marketing por email inteligente que ajuda negócios a crescer.',
    'footer.legal.privacy': 'Política de Privacidade',
    'footer.legal.terms': 'Termos de Serviço',
    'footer.legal.security': 'Segurança',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};