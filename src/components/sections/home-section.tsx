"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center py-20 pt-32 md:pt-20 bg-secondary/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Image 
            src="https://placehold.co/200x200.png" 
            alt="Profile Picture" 
            width={200} 
            height={200} 
            className="rounded-full mx-auto shadow-lg border-4 border-primary"
            data-ai-hint="profile person"
          />
        </motion.div> */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hi, I&apos;m <span className="text-primary">Nitesh Ratre</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          A Passionate Full Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild size="lg" className="shadow-lg">
            <Link href="#about">
              Discover More About Me
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
