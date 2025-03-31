// src/app/workshops/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Archive } from 'lucide-react'; // Example icons

// Placeholder data - replace with actual workshop data
const upcomingWorkshops = [
  { id: 'ws001', title: 'Grant Writing Essentials for NGOs', date: '2025-04-15', time: '10:00 AM - 1:00 PM', topic: 'Funding', audience: 'NGO Staff, Fundraisers', description: 'Learn the key components of successful grant proposals.' },
  { id: 'ws002', title: 'Digital Marketing for Non-Profits', date: '2025-05-10', time: '2:00 PM - 4:00 PM', topic: 'Marketing', audience: 'Marketing Teams, NGO Leaders', description: 'Strategies to enhance online presence and engagement.' },
];

const pastWorkshops = [
  { id: 'ws-past01', title: 'Impact Measurement Frameworks', date: '2025-02-20', topic: 'Strategy', materialsLink: '#' }, // Link to slides/recordings
  { id: 'ws-past02', title: 'Volunteer Management Best Practices', date: '2025-01-15', topic: 'Operations', materialsLink: '#' },
];

// Placeholder components
const WorkshopCard: React.FC<{ workshop: typeof upcomingWorkshops[0] | typeof pastWorkshops[0], isPast?: boolean }> = ({ workshop, isPast = false }) => (
  <Card className="mb-4 hover:shadow-md transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-lg">{workshop.title}</CardTitle>
      <CardDescription>
        {workshop.date} {('time' in workshop && workshop.time) ? `| ${workshop.time}` : ''} | Topic: {workshop.topic}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-700 mb-3">{'description' in workshop ? workshop.description : 'Details about this past workshop.'}</p>
      {isPast ? (
        <Link href={(workshop as typeof pastWorkshops[0]).materialsLink ?? '#'} passHref>
          <Button variant="outline" size="sm">View Materials</Button>
        </Link>
      ) : (
        // Simple registration placeholder - link to detail page or form later
        <Button size="sm">Register Now</Button>
      )}
    </CardContent>
  </Card>
);


const WorkshopsPage: React.FC = () => {
  // State for toggling view could be added later if needed
  // const showUpcoming = true; // Removed unused variable

  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          NGO Workshops & Seminars
        </h1>

        {/* Optional: Add Tabs or Buttons to toggle Upcoming/Past */}

        {/* Upcoming Workshops Section */}
        <section id="upcoming-workshops" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-primary" /> Upcoming Workshops
          </h2>
          {upcomingWorkshops.length > 0 ? (
            upcomingWorkshops.map(ws => <WorkshopCard key={ws.id} workshop={ws} />)
          ) : (
            <p className="text-gray-600">No upcoming workshops scheduled at this time. Check back soon!</p>
          )}
        </section>

        {/* Past Workshops Archive Section */}
        <section id="past-workshops">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Archive className="mr-2 h-6 w-6 text-gray-600" /> Past Workshop Archives
          </h2>
          {pastWorkshops.length > 0 ? (
             pastWorkshops.map(ws => <WorkshopCard key={ws.id} workshop={ws} isPast={true} />)
          ) : (
            <p className="text-gray-600">No past workshop materials available yet.</p>
          )}
        </section>
      </div>
  );
};

export default WorkshopsPage;
