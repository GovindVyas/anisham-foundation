// src/app/events/[slug]/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Image as ImageIcon } from 'lucide-react'; // Removed unused Users import

// Placeholder data - Combine upcoming and past for lookup
const allEvents = [
  { slug: 'annual-gala-2025', title: 'Anisham Foundation Annual Gala 2025', date: '2025-06-20', time: '6:00 PM onwards', location: 'Grand Ballroom, City Center', description: 'Join us for our annual fundraising gala to celebrate our achievements and support future initiatives. An evening of inspiration, networking, and entertainment awaits.', imageUrl: '/images/events/gala-placeholder.jpg', isPast: false, speakers: ['Dr. Anisha Sharma', 'Guest Speaker TBC'], schedule: ['6:00 PM: Reception', '7:00 PM: Dinner & Program', '9:00 PM: Entertainment'] },
  { slug: 'community-day-spring-2025', title: 'Community Fun Day - Spring', date: '2025-04-28', time: '11:00 AM - 3:00 PM', location: 'Central Park', description: 'A day of fun activities, games, and community building for all ages. Bring your family and friends!', imageUrl: '/images/events/community-placeholder.jpg', isPast: false, schedule: ['11:00 AM: Event Start', '12:00 PM: Games & Activities', '1:00 PM: Community Lunch (Potluck style)', '2:30 PM: Closing Remarks'] },
  { slug: 'winter-coding-bootcamp-demo', title: 'Winter Coding Bootcamp Demo Day', date: '2025-03-10', location: 'Online', description: 'Showcase of final projects from our intensive coding bootcamp graduates. See the innovative solutions developed by our talented participants.', imageUrl: '/images/events/coding-placeholder.jpg', isPast: true, galleryImages: ['/images/events/coding-demo1.jpg', '/images/events/coding-demo2.jpg'] }, // Example gallery images
];

// Placeholder Components
const EventRegistrationForm = () => (
  <Card className="mt-8 bg-gray-50">
    <CardHeader>
      <CardTitle>Register for this Event</CardTitle>
      <CardDescription>Secure your spot by filling out the form below.</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <Button type="submit">Register Now</Button>
      </form>
    </CardContent>
  </Card>
);

const ImageGallery: React.FC<{ images?: string[] }> = ({ images }) => {
  if (!images || images.length === 0) {
    return null; // Don't render if no images
  }
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center"><ImageIcon className="mr-2 h-5 w-5" /> Event Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative aspect-square">
            <Image src={imgSrc} alt={`Event gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};


import { Metadata } from 'next';

type EventDetailParams = {
  params: { slug: string };
};

export async function generateMetadata({ params }: EventDetailParams): Promise<Metadata> {
  const { slug } = params;
  const event = allEvents.find(e => e.slug === slug);
  
  if (!event) {
    return {
      title: 'Event Not Found - Anisham Foundation',
    };
  }
  
  return {
    title: `${event.title} - Anisham Foundation Events`,
    description: event.description,
  };
}

const EventDetailPage = ({ params }: EventDetailParams) => {
  const { slug } = params;
  const event = allEvents.find(e => e.slug === slug);

  if (!event) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the event you were looking for.</p>
          <Link href="/events" passHref>
             <Button variant="outline">Back to Events</Button>
          </Link>
        </div>
    );
  }

  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Link */}
        <Link href="/events" passHref>
           <span className="text-primary hover:underline mb-6 inline-block">&larr; Back to All Events</span>
        </Link>

        {/* Event Header */}
        {event.imageUrl && (
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image src={event.imageUrl} alt={event.title} layout="fill" objectFit="cover" priority />
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
        <div className="flex flex-wrap items-center space-x-4 text-gray-600 mb-6 text-md">
           <span className="flex items-center"><Calendar className="mr-1 h-5 w-5" /> {event.date} {event.time ? `| ${event.time}` : ''}</span>
           <span className="flex items-center"><MapPin className="mr-1 h-5 w-5" /> {event.location}</span>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle>About the Event</CardTitle></CardHeader>
              <CardContent><p className="text-gray-700 leading-relaxed">{event.description}</p></CardContent>
            </Card>

            {event.schedule && event.schedule.length > 0 && (
              <Card>
                <CardHeader><CardTitle>Schedule</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {event.schedule.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            )}

             {event.speakers && event.speakers.length > 0 && (
              <Card>
                <CardHeader><CardTitle>Speakers / Guests</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {event.speakers.map((speaker, i) => <li key={i}>{speaker}</li>)}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Image Gallery for Past Events */}
            {event.isPast && <ImageGallery images={event.galleryImages} />}

          </div>

          {/* Right Column (Registration / Info) */}
          <div className="lg:col-span-1">
            {!event.isPast ? (
              <EventRegistrationForm />
            ) : (
              <Card className="bg-gray-50 border-gray-200">
                 <CardHeader><CardTitle>Event Completed</CardTitle></CardHeader>
                 <CardContent><p className="text-gray-600">This event has already taken place. Check out the gallery below!</p></CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
  );
};

// Generate static paths for all events
export async function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default EventDetailPage;
