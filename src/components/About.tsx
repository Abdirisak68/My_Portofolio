import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const highlights = [
    "5+ Years Experience",
    "MERN Stack Expert",
    "Open Source Contributor",
    "UI/UX Enthusiast"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -rotate-2" />
               {/* 
                  Using Unsplash for a "coding setup" image.
               */}
               {/* Minimal workspace setup */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Workspace" 
                className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
