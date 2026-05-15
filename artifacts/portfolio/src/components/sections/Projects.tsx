import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Nexus Analytics Platform',
    description: 'A comprehensive real-time data analytics dashboard with customizable widgets, predictive modeling, and granular access controls for enterprise clients.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Quantum E-Commerce',
    description: 'A headless e-commerce storefront utilizing modern Jamstack architecture. Features include instant search, cart synchronization, and dynamic routing.',
    tech: ['Next.js', 'GraphQL', 'Stripe API', 'Framer Motion'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Orbital DevOps Pipeline',
    description: 'An automated CI/CD pipeline visualizer that hooks into GitHub Actions and AWS CodePipeline to provide real-time deployment statuses.',
    tech: ['Python', 'React', 'Docker', 'AWS', 'WebSockets'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Cipher Chat App',
    description: 'End-to-end encrypted messaging application built with WebRTC. Supports group chats, file sharing, and self-destructing messages.',
    tech: ['React Native', 'Socket.io', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
    featured: false,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            <span className="text-primary">03.</span> Featured Work
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 ${
                project.featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:items-center' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {project.featured && (
                <div className="hidden md:block w-full aspect-video rounded-xl bg-black/50 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-colors">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <FolderOpen className="w-24 h-24 text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500" />
                </div>
              )}

              <div className="flex flex-col h-full justify-between z-10 relative">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <FolderOpen className="w-10 h-10 text-primary md:hidden" />
                    <div className="flex gap-4">
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-6 text-muted-foreground text-sm">
                    <p>{project.description}</p>
                  </div>
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-gray-400">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
