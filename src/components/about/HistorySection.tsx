// src/components/about/HistorySection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Card components exist

const HistorySection: React.FC = () => {
  // Placeholder data - replace with actual content
  const milestones = [
    { year: '2010', description: 'Foundation established with a focus on local literacy programs.' },
    { year: '2015', description: 'Expanded services to include vocational training for adults.' },
    { year: '2018', description: 'Launched the first community development project in partnership with XYZ Corp.' },
    { year: '2022', description: 'Reached the milestone of training over 5,000 individuals.' },
  ];

  return (
    <section id="history" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Our Journey
        </h2>
        <div className="relative pl-8 border-l-4 border-primary"> {/* Simple timeline indicator */}
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[26px] top-1 border-4 border-white"></div> {/* Timeline marker */}
              <Card className="ml-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{milestone.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
