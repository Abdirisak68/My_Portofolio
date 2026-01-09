import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import MyImage from '@/assets/abdirisak.jpeg';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              {t('hero.role')}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-foreground">
              {t('hero.greeting')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Full Stack Dev
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                  {t('hero.cta.projects')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background border-2 border-border text-foreground font-semibold hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                {t('hero.cta.resume')}
              </button>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-dashed border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite]" />
              
              {/* Avatar Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                 {/* 
                    Using a placeholder Unsplash image for a professional developer portrait.
                    Replace this URL with your actual profile picture.
                 */}
                 {/* Professional developer headshot */}
                <img 
                  src={MyImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 bg-card p-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-2xl">⚛️</div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">React Junior</p>
                    <p className="text-sm font-bold">2+ Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 bg-card p-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">🚀</div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Projects</p>
                    <p className="text-sm font-bold">10+ Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
