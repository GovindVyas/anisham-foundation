// src/app/events/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // For event images
import { Calendar, Archive, MapPin } from 'lucide-react'; // Example icons

// Placeholder data - replace with actual event data
const upcomingEvents = [
  {
    slug: 'annual-gala-2025',
    title: 'Anisham Foundation Annual Gala 2025',
    date: '2025-06-20',
    time: '6:00 PM onwards',
    location: 'Grand Ballroom, City Center',
    description: 'Join us for our annual fundraising gala to celebrate our achievements and support future initiatives.',
    imageUrl: '/images/events/gala-placeholder.jpg', // Placeholder image path
  },
  {
    slug: 'community-day-spring-2025',
    title: 'Community Fun Day - Spring',
    date: '2025-04-28',
    time: '11:00 AM - 3:00 PM',
    location: 'Central Park',
    description: 'A day of fun activities, games, and community building for all ages.',
    imageUrl: '/images/events/community-placeholder.jpg', // Placeholder image path
  },
];

const pastEvents = [
   {
    slug: 'winter-coding-bootcamp-demo',
    title: 'Winter Coding Bootcamp Demo Day',
    date: '2025-03-10',
    location: 'Online',
    description: 'Showcase of final projects from our intensive coding bootcamp graduates.',
    imageUrl: '/images/events/coding-placeholder.jpg', // Placeholder image path
  },
];

// Reusable Event Card Component
interface Event {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  imageUrl?: string;
}

const EventCard: React.FC<{ event: Event, isPast?: boolean }> = ({ event, isPast = false }) => (
  <Card className="flex flex-col md:flex-row overflow-hidden mb-6 hover:shadow-lg transition-shadow duration-300">
    {event.imageUrl && (
      <div className="md:w-1/3 relative h-48 md:h-auto">
        <Image
          src={event.imageUrl}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>
    )}
    <div className={`p-4 flex flex-col justify-between ${event.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
      <div>
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <CardDescription className="text-sm flex items-center space-x-4 text-gray-600 mt-1">
            <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> {event.date} {event.time ? `| ${event.time}` : ''}</span>
            <span className="flex items-center"><MapPin className="mr-1 h-4 w-4" /> {event.location}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 mb-4">
          <p className="text-gray-700 text-sm">{event.description}</p>
        </CardContent>
      </div>
      <div className="mt-auto">
        <Link href={`/events/${event.slug}`} passHref>
           <Button variant={isPast ? "outline" : "default"} size="sm">
             {isPast ? 'View Details & Gallery' : 'Learn More & Register'}
           </Button>
        </Link>
      </div>
    </div>
  </Card>
);


const EventsPage: React.FC = () => {
  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Foundation Events
        </h1>

        {/* Upcoming Events Section */}
        <section id="upcoming-events" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-primary" /> Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => <EventCard key={event.slug} event={event} />)
          ) : (
            <p className="text-gray-600">No upcoming events scheduled at this time. Please check back soon!</p>
          )}
        </section>

        {/* Past Events Section */}
        <section id="past-events">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Archive className="mr-2 h-6 w-6 text-gray-600" /> Past Events
          </h2>
          {pastEvents.length > 0 ? (
             pastEvents.map(event => <EventCard key={event.slug} event={event} isPast={true} />)
          ) : (
            <p className="text-gray-600">No past event information available yet.</p>
          )}
        </section>
      </div>
  );
};

export default EventsPage;
