import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const programs = [
  {
    title: 'Youth Empowerment',
    description: 'Skills development and leadership training for young adults',
    href: '/training/youth-empowerment'
  },
  {
    title: 'Vocational Training',
    description: 'Practical job skills for various industries',
    href: '/training/vocational'
  },
  {
    title: 'Digital Literacy',
    description: 'Essential computer and internet skills for all ages',
    href: '/training/digital-literacy'
  },
  {
    title: 'Entrepreneurship',
    description: 'Business skills and startup guidance',
    href: '/training/entrepreneurship'
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link key={program.href} href={program.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{program.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
