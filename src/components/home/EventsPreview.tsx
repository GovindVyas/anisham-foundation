'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const events = [
  {
    title: "Annual Education Summit",
    date: "June 15, 2025",
    location: "New Delhi Convention Center",
    description: "Join us for our flagship education conference featuring keynote speakers and workshops."
  },
  {
    title: "Community Development Workshop",
    date: "July 8, 2025",
    location: "Virtual Event",
    description: "Interactive sessions on sustainable community development practices."
  }
];

const EventsPreview = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="font-medium mb-2">{event.date}</p>
                <p className="text-muted-foreground mb-4">{event.location}</p>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
