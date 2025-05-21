"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResumeSection({ id }: { id: string }) {
  return (
    <motion.section
      id={id}
      className="py-20 min-h-[60vh] flex items-center justify-center bg-secondary/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-lg mx-auto rounded-2xl border-2 border-border shadow-md hover:shadow-xl transition-transform hover:scale-[1.01] p-6 md:p-10">
            <CardHeader className="items-center">
              <FileText className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">My Resume</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Interested in learning more about my qualifications? Download my resume to see my full experience and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6">
              <Button asChild size="lg" className="shadow-lg w-full sm:w-auto">
                <a href="/NiteshRatre-Resume.pdf" download="NiteshRatre-Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
