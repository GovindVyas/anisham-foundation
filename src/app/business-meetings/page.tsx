// src/app/business-meetings/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import Link from 'next/link'; // Removed unused Link import
import { Calendar, Archive } from 'lucide-react'; // Removed unused Briefcase import, Example icons

// Placeholder data - replace with actual meeting data
const upcomingMeetings = [
  { id: 'bm001', title: 'Tech Leaders Networking Breakfast', date: '2025-05-15', time: '8:00 AM - 9:30 AM', topic: 'AI in Business', venue: 'Hilton Downtown, Salon A', description: 'Connect with fellow tech executives and discuss the latest trends in AI.' },
  { id: 'bm002', title: 'Marketing Masterminds Meetup', date: '2025-06-05', time: '5:00 PM - 7:00 PM', topic: 'Content Strategy', venue: 'Online (Zoom)', description: 'Share insights and challenges in content marketing with peers.' },
];

const pastMeetings = [
  { id: 'bm-past01', title: 'Startup Funding Strategies', date: '2025-03-20', topic: 'Finance', summary: 'Key takeaways included diversifying funding sources and perfecting the pitch deck.' },
  { id: 'bm-past02', title: 'Future of Remote Work Panel', date: '2025-02-10', topic: 'HR/Operations', summary: 'Discussion highlighted hybrid models and the importance of asynchronous communication.' },
];

// Placeholder components
const MeetingCard: React.FC<{ meeting: typeof upcomingMeetings[0] | typeof pastMeetings[0], isPast?: boolean }> = ({ meeting, isPast = false }) => (
  <Card className="mb-4 hover:shadow-md transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-lg">{meeting.title}</CardTitle>
      <CardDescription>
        {meeting.date} {('time' in meeting && meeting.time) ? `| ${meeting.time}` : ''} | Topic: {meeting.topic}
        {('venue' in meeting && meeting.venue) && ` | Venue: ${meeting.venue}`}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-700 mb-3">
        {'description' in meeting ? meeting.description : ('summary' in meeting ? `Summary: ${meeting.summary}` : 'Details about this past meeting.')}
      </p>
      {!isPast && (
        // Simple registration placeholder
        <Button size="sm">Register / RSVP</Button>
      )}
       {/* Optionally add link to photos/presentations for past meetings */}
    </CardContent>
  </Card>
);

const BusinessMeetingsPage: React.FC = () => {
  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Business Networking Meetings
        </h1>

        {/* Upcoming Meetings Section */}
        <section id="upcoming-meetings" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-primary" /> Upcoming Meetings
          </h2>
          {upcomingMeetings.length > 0 ? (
            upcomingMeetings.map(mtg => <MeetingCard key={mtg.id} meeting={mtg} />)
          ) : (
            <p className="text-gray-600">No upcoming meetings scheduled at this time. Please check back soon!</p>
          )}
        </section>

        {/* Past Meeting Highlights Section */}
        <section id="past-meetings">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Archive className="mr-2 h-6 w-6 text-gray-600" /> Past Meeting Highlights
          </h2>
          {pastMeetings.length > 0 ? (
             pastMeetings.map(mtg => <MeetingCard key={mtg.id} meeting={mtg} isPast={true} />)
          ) : (
            <p className="text-gray-600">No past meeting highlights available yet.</p>
          )}
        </section>
      </div>
  );
};

export default BusinessMeetingsPage;
