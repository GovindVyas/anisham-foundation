// src/app/training/[slug]/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import Link from 'next/link';

// Placeholder data - In a real app, fetch this based on slug
const programs = [
  { slug: 'digital-literacy-basics', title: 'Digital Literacy Basics', description: 'Fundamental computer skills for beginners.', category: 'Foundation Skills', objectives: ['Understand computer hardware/software', 'Navigate operating systems', 'Use basic internet tools (email, search)'], curriculum: ['Intro to Computers', 'Windows/macOS Basics', 'Internet Safety', 'Email Essentials'], schedule: 'Mondays & Wednesdays, 6 PM - 8 PM (4 weeks)', instructor: 'Priya Singh', prerequisites: 'None', audience: 'Absolute beginners' },
  { slug: 'web-development-intro', title: 'Introduction to Web Development', description: 'Learn the basics of HTML, CSS, and JavaScript.', category: 'Tech Skills', objectives: ['Build static web pages', 'Style pages with CSS', 'Add interactivity with JavaScript'], curriculum: ['HTML Fundamentals', 'CSS Styling & Layouts', 'JavaScript Basics', 'DOM Manipulation'], schedule: 'Tuesdays & Thursdays, 7 PM - 9 PM (6 weeks)', instructor: 'Amit Patel', prerequisites: 'Basic computer literacy', audience: 'Aspiring web developers' },
  // Add other programs here...
];

// Placeholder components for sections
const RegistrationForm = () => (
  <Card className="mt-8 bg-gray-50">
    <CardHeader>
      <CardTitle>Register for this Program</CardTitle>
      <CardDescription>Fill out the form below to enroll.</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Basic form placeholder - Use Formspree or similar later */}
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <Button type="submit">Submit Registration</Button>
      </form>
    </CardContent>
  </Card>
);

const RelatedStories = () => (
    <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
        <p className="text-gray-600">Read about the impact of this program (testimonials coming soon).</p>
        {/* Add links or content later */}
    </div>
);

import { Metadata } from 'next';

type TrainingDetailParams = {
  params: { slug: string };
};

export async function generateMetadata({ params }: TrainingDetailParams): Promise<Metadata> {
  const { slug } = params;
  const program = programs.find(p => p.slug === slug);
  
  if (!program) {
    return {
      title: 'Program Not Found - Anisham Foundation',
    };
  }
  
  return {
    title: `${program.title} - Anisham Foundation Training`,
    description: program.description,
  };
}

const TrainingDetailPage = ({ params }: TrainingDetailParams) => {
  const { slug } = params;
  // Find the program data based on the slug
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    // Handle case where program is not found
    return (
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn&#39;t find the training program you were looking for.</p>
          <Link href="/training" passHref>
             <Button variant="outline">Back to Training Programs</Button>
          </Link>
        </div>
    );
  }

  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Link */}
        <Link href="/training" passHref>
           <span className="text-primary hover:underline mb-6 inline-block">&larr; Back to All Programs</span>
        </Link>

        {/* Program Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{program.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{program.category}</p>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle>Description</CardTitle></CardHeader>
              <CardContent><p>{program.description}</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Learning Objectives</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {program.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              </CardContent>
            </Card>
             <Card>
              <CardHeader><CardTitle>Curriculum Outline</CardTitle></CardHeader>
              <CardContent>
                 <ul className="list-decimal list-inside space-y-1">
                  {program.curriculum.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (Meta Info & Registration) */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader><CardTitle>Program Details</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Schedule:</strong> {program.schedule}</p>
                <p><strong>Instructor:</strong> {program.instructor}</p>
                <p><strong>Prerequisites:</strong> {program.prerequisites}</p>
                <p><strong>Target Audience:</strong> {program.audience}</p>
              </CardContent>
            </Card>
            <RegistrationForm />
          </div>
        </div>

        {/* Related Success Stories */}
        <RelatedStories />

      </div>
  );
};

// Required for dynamic routes in App Router to generate static pages at build time
export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default TrainingDetailPage;
