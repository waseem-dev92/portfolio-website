import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPython, 
  SiPostgresql, SiMongodb, SiDocker, SiKubernetes,
  SiGit, SiNextdotjs, SiExpress, SiTailwindcss, SiRedis 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-end text-right"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Skills <span className="text-primary">.02</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-white">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-2 cursor-default transition-colors"
                    >
                      <Icon style={{ color: skill.color }} className="w-4 h-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
