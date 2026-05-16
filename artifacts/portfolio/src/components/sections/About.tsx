import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Zap, GitCommit } from 'lucide-react';
import avatarImg from '@/assets/avatar.png';

const stats = [
  { label: 'Years Experience', value: '4+', icon: Briefcase },
  { label: 'Projects Completed', value: '40+', icon: Code2 },
  { label: 'Tech Stack', value: 'Modern', icon: Zap },
  { label: 'Commits', value: '2k+', icon: GitCommit },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a Software Engineer with a strong passion for developing modern, scalable, and user-friendly web applications. I focus on creating clean, efficient, and high-performance solutions that deliver seamless user experiences across different platforms.
With expertise in frontend and backend development, I enjoy transforming ideas into functional digital products using modern technologies and best development practices. I am committed to writing clean and maintainable code while continuously improving my technical skills and industry knowledge.
            </p>
            <p>
     I am highly motivated, detail-oriented, and always eager to take on new challenges that help me grow professionally. My goal is to contribute to innovative projects and build impactful software solutions that create real-world value.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon className="w-5 h-5" />
                      <span className="text-3xl font-display font-bold text-white">{stat.value}</span>
                    </div>
                    <span className="text-sm uppercase tracking-wider">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl mix-blend-screen" />
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="w-full h-full rounded-xl overflow-hidden bg-background relative group">
                <img 
                  src={avatarImg} 
                  alt="Waseem Abbas Avatar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-xl z-10 pointer-events-none mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
