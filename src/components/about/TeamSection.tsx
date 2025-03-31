// src/components/about/TeamSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assuming Avatar components exist

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string; // Optional image URL
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, title, bio, imageUrl }) => (
  <Card className="text-center shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="flex flex-col items-center pt-6">
      <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
        {imageUrl ? (
          <AvatarImage src={imageUrl} alt={name} />
        ) : (
          // Simple fallback with initials
          <AvatarFallback className="text-2xl bg-gray-200 text-gray-600">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        )}
      </Avatar>
      <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      <p className="text-sm text-primary font-medium">{title}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-sm">{bio}</p>
    </CardContent>
  </Card>
);

const TeamSection: React.FC = () => {
  // Placeholder data - replace with actual team members
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Anisha Sharma',
      title: 'Founder & President',
      bio: 'Visionary leader dedicated to educational equity and community empowerment.',
      // imageUrl: '/images/team/anisha-sharma.jpg', // Example path
    },
    {
      name: 'Rajesh Kumar',
      title: 'Program Director',
      bio: 'Oversees the development and implementation of all training programs.',
      // imageUrl: '/images/team/rajesh-kumar.jpg',
    },
    {
      name: 'Priya Singh',
      title: 'Community Outreach Coordinator',
      bio: 'Connects the foundation with communities and partners to foster collaboration.',
      // imageUrl: '/images/team/priya-singh.jpg',
    },
     {
      name: 'Amit Patel',
      title: 'Lead Trainer',
      bio: 'Develops curriculum and leads key training sessions with expertise.',
      // imageUrl: '/images/team/amit-patel.jpg',
    },
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
