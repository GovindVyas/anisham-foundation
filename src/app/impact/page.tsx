'use client'; // Add 'use client' directive for the hook

// src/app/impact/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Map } from 'lucide-react'; // Keep BarChart3 removed
import useCounterAnimation from '@/hooks/useCounterAnimation'; // Correct hook import

// Placeholder Data
const caseStudies = [
  {
    slug: 'digital-skills-rural-india',
    title: 'Bridging the Digital Divide in Rural India',
    summary: 'A multi-year project providing digital literacy and vocational training to over 2,000 adults in remote villages, leading to increased employment opportunities.',
    imageUrl: '/images/impact/rural-digital.jpg', // Placeholder
    challenge: 'Limited access to technology and relevant skills training in underserved rural areas.',
    solution: 'Established community computer centers, developed localized curriculum, and partnered with local NGOs for outreach.',
    outcome: '60% increase in participants reporting new income sources, significant improvement in digital confidence.',
  },
  {
    slug: 'ngo-capacity-building-workshop',
    title: 'Strengthening NGO Operations through Capacity Building',
    summary: 'A series of workshops focused on grant writing, financial management, and digital marketing for small to medium-sized NGOs.',
    imageUrl: '/images/impact/ngo-workshop.jpg', // Placeholder
    challenge: 'Many local NGOs struggled with sustainability and operational efficiency.',
    solution: 'Delivered targeted workshops led by industry experts, providing practical tools and templates.',
    outcome: 'Participating NGOs reported a 40% average increase in successful grant applications within one year.',
  },
];

const impactMetrics = [
  { label: 'Individuals Trained', value: 7500, suffix: '+' },
  { label: 'Community Projects Completed', value: 45, suffix: '' },
  { label: 'Partner NGOs Supported', value: 120, suffix: '+' },
  { label: 'Volunteer Hours Contributed', value: 15000, suffix: '+' },
];

// Placeholder Components
const CaseStudyCard: React.FC<{ study: typeof caseStudies[0] }> = ({ study }) => (
  <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="md:flex">
      {study.imageUrl && (
        <div className="md:w-1/3 relative h-48 md:h-auto flex-shrink-0">
          <Image src={study.imageUrl} alt={study.title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-xl">{study.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-700 mb-4">{study.summary}</p>
            {/* Optionally link to a full case study page */}
            <Link href={`/impact/${study.slug}`} passHref>
               <Button variant="link" className="p-0 h-auto text-primary">Read Full Case Study &rarr;</Button>
            </Link>
          </CardContent>
        </div>
      </div>
    </div>
  </Card>
);

// Helper component to use the counter hook
const MetricDisplay: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const count = useCounterAnimation(value); // Use the hook
  return (
    <>
      {count}{suffix}
    </>
  );
};

const ImpactMetricsSection = () => (
  <section id="impact-metrics" className="py-12 md:py-16 bg-primary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Impact by the Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {impactMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              {/* Use the MetricDisplay component */}
              <MetricDisplay value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-sm uppercase tracking-wider">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GeographicReachSection = () => (
    <section id="geographic-reach" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
                <Map className="mr-2 h-6 w-6 text-primary" /> Geographic Reach (Placeholder)
            </h2>
            <p className="text-center text-gray-600 mb-6">Visualizing the areas where our programs make a difference.</p>
            {/* Placeholder for a map component or image */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">[Map Visualization Coming Soon]</p>
            </div>
        </div>
    </section>
);


const ImpactPage: React.FC = () => {
  return (
    <> {/* Use Fragment or a single top-level div if needed */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Impact & Implementation
        </h1>

        {/* Case Studies Section */}
        <section id="case-studies" className="mb-12">
           <h2 className="text-2xl font-semibold mb-6 flex items-center">
             <Target className="mr-2 h-6 w-6 text-primary" /> Case Studies
           </h2>
           {caseStudies.map(study => <CaseStudyCard key={study.slug} study={study} />)}
        </section>
      </div>

      {/* Impact Metrics Section (Full Width) */}
      <ImpactMetricsSection />

      {/* Geographic Reach Section */}
      <GeographicReachSection />
    </>
  );
};

// Note: Need to create dynamic route for /impact/[slug] if linking case studies
// export async function generateStaticParams() { ... }

export default ImpactPage;
