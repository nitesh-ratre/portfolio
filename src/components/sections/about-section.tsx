"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function AboutSection({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="py-20 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="https://placehold.co/600x800.png" 
                alt="About Me" 
                width={600} 
                height={800} 
                className="object-cover h-full w-full"
                data-ai-hint="workspace desk" 
              />
            </motion.div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <motion.p 
                  className="text-lg text-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Hello! I&apos;m a Full Stack Developer with solid hands-on experience in designing and building reliable, scalable, and user-focused web applications.
                </motion.p>
                <motion.p 
                  className="text-lg text-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Currently, I’m working as a <span className='text-[#008080]'>Backend Developer Intern</span> at <span className='text-[#008080] font-bold'>Codenicely</span> (since December 2024), where I’m an active contributor to the development of a comprehensive <span className='text-[#008080]'>Warehouse Management System</span>.
                </motion.p>
                <motion.p 
                  className="text-lg text-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Before this, I served as a <span className='text-[#008080]'>Full Stack Developer Intern</span> at the <span className='text-[#008080] font-bold'>National Informatics Centre</span> (Jan 2024 – July 2024), where I led the development of a Network Management System from the scratch using the MERN stack.
                </motion.p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
