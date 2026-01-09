import { useLanguage } from '@/hooks/use-language';
import { useSkills } from '@/hooks/use-data';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cpu } from 'lucide-react';

export function Skills() {
  const { t } = useLanguage();
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const categories = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return <Layout className="w-6 h-6 text-primary" />;
      case 'backend': return <Server className="w-6 h-6 text-primary" />;
      case 'database': return <Database className="w-6 h-6 text-primary" />;
      case 'devops': return <Cpu className="w-6 h-6 text-primary" />;
      default: return <Code className="w-6 h-6 text-primary" />;
    }
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
           <div className="animate-pulse space-y-8">
             <div className="h-10 bg-muted rounded w-1/3 mx-auto"></div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="h-64 bg-muted rounded-2xl"></div>
               ))}
             </div>
           </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-foreground">{t('skills.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories && Object.entries(categories).map(([category, categorySkills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-bold font-display capitalize">{category}</h3>
              </div>

              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
