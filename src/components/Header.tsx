import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];

  const navItems = [
    { key: 'features', href: '#features' },
    { key: 'pricing', href: '#pricing' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'integrations', href: '#integrations' },
    { key: 'contact', href: '#contact' },
  ];

  const NavLinks = ({ className = '', mobile = false }: { className?: string; mobile?: boolean }) => (
    <nav className={`${className} ${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
        >
          {t(`nav.${item.key}`)}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/src/assets/logo-light.svg" 
            alt="Rusender" 
            className={`h-5 w-auto transition-all duration-200 ${
              theme === 'dark' 
                ? 'brightness-0 invert' 
                : 'brightness-0 saturate-100'
            }`}
            style={{
              filter: theme === 'dark' 
                ? 'brightness(0) invert(1)' 
                : 'brightness(0) saturate(100%) invert(25%) sepia(15%) saturate(1500%) hue-rotate(252deg) brightness(95%) contrast(107%)'
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <NavLinks className="hidden md:flex" />

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Globe className="h-4 w-4 mr-2" />
                {languages.find(lang => lang.code === language)?.flag}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as 'en' | 'es' | 'pt')}
                  className="cursor-pointer hover:bg-card-hover"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden sm:flex"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* CTA Button */}
          <Button className="btn-hero hidden sm:flex">
            {t('hero.cta.primary')}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <NavLinks mobile />
                
                <div className="border-t border-border pt-6 space-y-4">
                  {/* Mobile Language Selector */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        {languages.find(lang => lang.code === language)?.flag}
                        <span className="ml-2">{languages.find(lang => lang.code === language)?.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setLanguage(lang.code as 'en' | 'es' | 'pt')}
                          className="cursor-pointer hover:bg-card-hover"
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Mobile Theme Toggle */}
                  <Button
                    variant="outline"
                    onClick={toggleTheme}
                    className="w-full justify-start"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </Button>

                  {/* Mobile CTA */}
                  <Button className="btn-hero w-full">
                    {t('hero.cta.primary')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;