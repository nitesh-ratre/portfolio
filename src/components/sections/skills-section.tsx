"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = [
  { name: 'Django REST Framework', src: '/skillslogo/djangorest.jpg', description: "Server-side logic" },
  { name: 'Next.js', src: '/skillslogo/nextjs.jpg', description: "SSR & SSG applications" },
  { name: 'React', src: '/skillslogo/react.jpg', description: "Building dynamic UIs" },
  { name: 'Node.js', src: '/skillslogo/nodejs.jpg', description: "Server-side JavaScript" },
  { name: 'Express.js', src: '/skillslogo/express.jpg', description: "Backend framework for Node.js" },
  { name: 'MongoDB', src: '/skillslogo/mongodb.jpg', description: "NoSQL database" },
  { name: 'Tailwind CSS', src: '/skillslogo/tailwindcss.jpg', description: "Utility-first styling" },
  { name: 'Framer Motion', src: '/skillslogo/framermotion.jpg', description: "Smooth animations" },
];

export default function SkillsSection({ id }: { id: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
      <motion.section
        id={id}
        className="relative z-10 py-20 min-h-screen flex items-center justify-center 
                   bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] 
                   from-secondary/30 via-secondary/20 to-transparent 
                   rounded-3xl border border-primary/10 
                   shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                   backdrop-blur-md transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsData.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col text-center items-center rounded-2xl">
                  <CardHeader className="items-center flex flex-col">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
