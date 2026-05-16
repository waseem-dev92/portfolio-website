import React from 'react';
import { motion } from 'framer-motion';
import {
  SiAngular, SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiPhp, SiNodedotjs, SiExpress, SiMysql,
  SiGit, SiGithub
} from 'react-icons/si';

type Skill = {
  name: string;
  icon?: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
  color?: string;
};

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Responsive Design', color: '#7C3AED' },
      { name: 'UI/UX Implementation', color: '#EC4899' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'REST APIs', color: '#22D3EE' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Authentication & Auth', color: '#F59E0B' },
      { name: 'API Integration', color: '#10B981' },
      { name: 'Server-Side Development', color: '#6366F1' },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Problem Solving', color: '#22C55E' },
      { name: 'Clean Code Architecture', color: '#A78BFA' },
      { name: 'Performance Optimization', color: '#FB923C' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
              viewport={{ once: true, margin: '-100px' }}
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
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {Icon ? (
                        <Icon style={{ color: skill.color }} className="w-4 h-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      ) : (
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: skill.color }}
                        />
                      )}
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
