// src/app/recognitions/page.tsx
import React from 'react';
import { Card } from '@/components/ui/card'; // Removed unused Card parts
import { Button } from '@/components/ui/button';
import { Award, UserCheck, FileText } from 'lucide-react'; // Example icons
import Image from 'next/image';

// Placeholder Data
const awardsReceived = [
  { id: 'award01', name: 'Community Impact Award 2024', issuer: 'City Council', year: 2024, imageUrl: '/images/awards/community-impact.png' }, // Placeholder image
  { id: 'award02', name: 'Excellence in Education NGO', issuer: 'National Education Board', year: 2023, imageUrl: '/images/awards/excellence-edu.png' },
  { id: 'award03', name: 'Top Workplace for Volunteers', issuer: 'Volunteer Today Magazine', year: 2023 }, // No image example
];

const recognizedIndividuals = [
  { id: 'rec01', name: 'Priya Singh', recognition: 'Outstanding Community Service 2024', details: 'For her tireless work in coordinating outreach programs.', imageUrl: '/images/team/priya-singh.jpg' }, // Reusing team image placeholder
  { id: 'rec02', name: 'Amit Patel', recognition: 'Trainer of the Year 2023', details: 'Acknowledged for developing impactful curricula and mentoring trainees.', imageUrl: '/images/team/amit-patel.jpg' }, // Reusing team image placeholder
];

// Placeholder Components
const AwardsGallery = () => (
  <section id="awards-gallery" className="mb-12">
    <h2 className="text-2xl font-semibold mb-6 flex items-center">
      <Award className="mr-2 h-6 w-6 text-primary" /> Awards & Accolades
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {awardsReceived.map(award => (
        <Card key={award.id} className="text-center p-4 hover:shadow-md transition-shadow duration-300">
          {award.imageUrl ? (
            <div className="relative h-24 w-full mb-3">
              <Image src={award.imageUrl} alt={award.name} layout="fill" objectFit="contain" />
            </div>
          ) : (
            <div className="h-24 flex items-center justify-center bg-gray-100 rounded-md mb-3">
              <Award className="h-10 w-10 text-gray-400" />
            </div>
          )}
          <p className="font-semibold text-sm">{award.name}</p>
          <p className="text-xs text-gray-500">{award.issuer} - {award.year}</p>
        </Card>
      ))}
    </div>
  </section>
);

const RecipientProfiles = () => (
  <section id="recipient-profiles" className="mb-12">
    <h2 className="text-2xl font-semibold mb-6 flex items-center">
      <UserCheck className="mr-2 h-6 w-6 text-primary" /> Recognized Individuals
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recognizedIndividuals.map(person => (
        <Card key={person.id} className="flex items-center p-4 hover:shadow-md transition-shadow duration-300">
          {person.imageUrl && (
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image src={person.imageUrl} alt={person.name} layout="fill" objectFit="cover" />
            </div>
          )}
          <div>
            <h3 className="font-semibold">{person.name}</h3>
            <p className="text-sm text-primary font-medium">{person.recognition}</p>
            <p className="text-xs text-gray-600 mt-1">{person.details}</p>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

const NominationProcess = () => (
  <section id="nomination-process" className="bg-gray-50 p-6 rounded-lg">
    <h2 className="text-2xl font-semibold mb-4 flex items-center">
      <FileText className="mr-2 h-6 w-6 text-primary" /> Nomination Process
    </h2>
    <p className="text-gray-700 mb-4">
      Know someone deserving of recognition? Follow the steps below to submit a nomination.
      We accept nominations annually between January 1st and March 31st.
    </p>
    {/* Placeholder for steps/form */}
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
      <li>Review the award categories and criteria (link to Awards page needed).</li>
      <li>Download the nomination form (link below) or fill out the online form.</li>
      <li>Submit the completed form and any supporting documents by the deadline.</li>
    </ol>
    <div className="flex space-x-4">
      <Button variant="outline">Download Form (PDF)</Button>
      {/* <Button>Submit Online (Coming Soon)</Button> */}
    </div>
  </section>
);


const RecognitionsPage: React.FC = () => {
  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Recognitions & Achievements
        </h1>

        <AwardsGallery />
        <RecipientProfiles />
        <NominationProcess />

      </div>
  );
};

export default RecognitionsPage;
