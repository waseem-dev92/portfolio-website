
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Developer',
  'PHP / Laravel Developer',
  'React.js Developer',
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let speed = isDeleting ? 45 : 100;

    if (!isDeleting && displayText === currentTitle) {
      speed = 1500;
    }

    if (isDeleting && displayText === '') {
      speed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">

          {/* Text Content */}
          <motion.div
            
            className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary">
              <Terminal className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
              Hi, I'm <br />
              Waseem{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Abbas
              </span>
            </h1>

            {/* Typing Animation */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-5 min-h-[2rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                {displayText}
              </span>
              <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-pulse" />
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl">
              I'm a Software Engineer passionate about building modern,
              scalable, and high-performance web applications. I specialize
              in PHP, Laravel, React.js, JavaScript, MySQL, and REST APIs.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-base font-semibold shadow-[0_0_20px_rgba(0,195,255,0.3)] hover:shadow-[0_0_30px_rgba(0,195,255,0.5)] transition-all"
                asChild
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-semibold border-white/10 hover:bg-white/5 hover:text-white"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[100px]" />

            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 via-blue-500/30 to-purple-600/50 blur-xl opacity-60" />

              <img
                src={`${import.meta.env.BASE_URL}waseem-profile.png`}
                alt="Waseem Abbas - Software Engineer"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
