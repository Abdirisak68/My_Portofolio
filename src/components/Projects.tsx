import { useLanguage } from '@/hooks/use-language';
import { useProjects } from '@/hooks/use-data';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-4 text-foreground">{t('projects.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('projects.subtitle')}</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] bg-muted rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Overlay */}
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                    {project.projectUrl && (
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                        title={t('projects.view')}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                        title={t('projects.code')}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <button className="md:hidden w-full mt-8 py-3 rounded-xl border border-border text-foreground font-semibold flex items-center justify-center gap-2">
          View All Projects <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
