"use client";

import { useState } from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export default function ProjectCard({ title, description, technologies, imageUrl, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.2 : 1 }} // Amplia a imagem quando hover
            transition={{ duration: 0.5 }}
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
