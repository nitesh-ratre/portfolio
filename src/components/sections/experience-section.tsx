"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    role: "Backend Developer Intern",
    company: "Codenicely",
    period: "Dec 2024 - Present",
    description:
      "Worked on VNR WMS, a web-based platform for managing plant operations like Arrival, Processing, Packaging, and Dispatch. Implemented transaction workflows, role-based access, and real-time reporting with barcode tracking.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "NIC, Bilaspur",
    period: "Jan 2024 - July 2024",
    description:
      "Built a MERN stack app to manage network complaints. Developed secure JWT auth, role-specific dashboards, and real-time issue escalation with Tailwind CSS.",
  },
];

const educationData = [
  {
    degree: "Master of Computer Applications",
    institution: "National Institute of Technology, Raipur",
    period: "2021 - 2024",
    description: "Pursued advanced studies in computer science with a strong emphasis on Web Development, Data Structures, and Machine Learning. Graduated with First Class Honors.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Govt. V. Y. T. PG Autonomous College, Durg (C.G.)",
    period: "2017 - 2020",
    description: "Completed a comprehensive undergraduate program focused on computer applications, software development, and related IT subjects.",
  },
];


export default function ExperienceEducationSection({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: i * 0.15,
      },
    }),
  };

  const renderCards = (data: typeof workExperience) =>
    data.map((item, index) => (
      <motion.div
        key={index}
        custom={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="mb-8"
      >
        <Card className="rounded-2xl border-2 border-border bg-background shadow-md hover:shadow-lg transition-transform hover:scale-[1.01] duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              {"role" in item ? item.role : item.degree}
            </CardTitle>
            <CardDescription className="text-md text-muted-foreground">
              {"company" in item ? item.company : item.institution} | {item.period}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{item.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    ));

  return (
    <motion.section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Work & Education</h2>
          <div className="flex justify-center gap-4">
            <Button
              variant={activeTab === "work" ? "default" : "outline"}
              onClick={() => setActiveTab("work")}
            >
              <Briefcase className="w-4 h-4 mr-2" /> Work
            </Button>
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap className="w-4 h-4 mr-2" /> Education
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vertical dotted line for md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-border z-0" />

          {/* Work section */}
          <div className="relative z-10">
            {activeTab === "work" && renderCards(workExperience)}
          </div>

          {/* Education section */}
          <div className="relative z-10">
            {activeTab === "education" && renderCards(educationData)}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
