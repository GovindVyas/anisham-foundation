// src/components/about/MissionVisionValuesSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, Heart } from 'lucide-react'; // Example icons

interface SectionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SectionItem: React.FC<SectionItemProps> = ({ icon, title, description }) => (
  <Card className="text-center shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="flex flex-col items-center">
      <div className="mb-4 text-primary">{icon}</div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const MissionVisionValuesSection: React.FC = () => {
  // Placeholder content - replace with actual text
  const mission = "To empower individuals and communities through accessible education and skill development programs.";
  const vision = "A future where everyone has the opportunity to reach their full potential and contribute meaningfully to society.";
  const values = "Integrity, Inclusivity, Collaboration, Impact, Lifelong Learning.";

  return (
    <section id="mission-vision-values" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Our Guiding Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionItem
            icon={<Target size={40} />}
            title="Our Mission"
            description={mission}
          />
          <SectionItem
            icon={<Eye size={40} />}
            title="Our Vision"
            description={vision}
          />
          <SectionItem
            icon={<Heart size={40} />}
            title="Our Values"
            description={values}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;
