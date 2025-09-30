import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, User, Lock } from 'lucide-react';

interface TrialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrialDialog = ({ open, onOpenChange }: TrialDialogProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: t('trial.error.title'),
        description: t('trial.error.fields'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('trial.success.title'),
      description: t('trial.success.description'),
    });

    // Reset form and close dialog
    setFormData({ name: '', email: '', password: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            {t('trial.title')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('trial.description')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              {t('trial.name.label')}
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder={t('trial.name.placeholder')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              {t('trial.email.label')}
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder={t('trial.email.placeholder')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">
              {t('trial.password.label')}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder={t('trial.password.placeholder')}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button type="submit" className="w-full btn-hero">
              {t('trial.submit')}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {t('trial.terms')}
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialDialog;
