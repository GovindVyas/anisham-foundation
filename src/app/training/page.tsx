// src/app/training/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming Card components exist
import Link from 'next/link';

// Placeholder data - replace with actual training programs
const programs = [
  { slug: 'digital-literacy-basics', title: 'Digital Literacy Basics', description: 'Fundamental computer skills for beginners.', category: 'Foundation Skills' },
  { slug: 'web-development-intro', title: 'Introduction to Web Development', description: 'Learn the basics of HTML, CSS, and JavaScript.', category: 'Tech Skills' },
  { slug: 'advanced-excel-for-business', title: 'Advanced Excel for Business', description: 'Master complex formulas, data analysis, and visualization.', category: 'Business Skills' },
  { slug: 'communication-skills-workshop', title: 'Effective Communication Workshop', description: 'Enhance your verbal and written communication.', category: 'Soft Skills' },
  { slug: 'graphic-design-fundamentals', title: 'Graphic Design Fundamentals', description: 'Introduction to design principles and tools like Canva/Figma.', category: 'Creative Skills' },
];

// Placeholder for category filtering - will implement later
const ProgramFilters = () => (
  <div className="mb-8 p-4 bg-gray-100 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
    {/* Add filter controls here (e.g., buttons, dropdown) */}
    <p className="text-sm text-gray-600">Category filters coming soon...</p>
  </div>
);

const TrainingPage: React.FC = () => {
  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Training Programs
        </h1>

        {/* Filters Section */}
        <ProgramFilters />

        {/* Program Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.slug} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription>{program.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{program.description}</p>
              </CardContent>
              <div className="p-4 pt-0">
                 {/* Link to the detail page - structure needs to be created */}
                <Link href={`/training/${program.slug}`} passHref>
                  <span className="text-primary hover:underline font-medium cursor-pointer">
                    Learn More &rarr;
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default TrainingPage;
