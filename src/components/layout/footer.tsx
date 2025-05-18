"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8 bg-background border-t border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }} // Delay to appear after content load
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/nits-hub/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/nitesh-ratre/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} MotionFolio. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed and developed by Your Name.
        </p>
      </div>
    </motion.footer>
  );
}
