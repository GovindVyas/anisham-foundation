'use client';

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "The training program transformed my career prospects completely.",
    name: "Rahul Sharma",
    role: "Vocational Training Graduate",
    avatar: "/images/avatar1.jpg"
  },
  {
    quote: "Thanks to Anisham Foundation, I started my own small business.",
    name: "Priya Patel",
    role: "Entrepreneurship Program",
    avatar: "/images/avatar2.jpg"
  },
  {
    quote: "The digital literacy course helped me connect with my family online.",
    name: "Arjun Mehta",
    role: "Senior Citizen Participant",
    avatar: "/images/avatar3.jpg"
  }
];

const Testimonials = () => {
  return (
    // Adjust background for consistency
    <section className="py-16 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Apply heading font */}
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            // Card uses default bg-card/text-card-foreground
            <Card key={index} className="h-full flex flex-col p-6"> {/* Added padding */}
              <CardHeader className="flex-1 p-0 mb-4"> {/* Adjusted padding/margin */}
                {/* Ensure quote uses foreground color */}
                <blockquote className="text-base italic text-foreground"> {/* Adjusted size */}
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardHeader>
              <CardContent className="p-0"> {/* Adjusted padding */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    {/* Assuming avatar images exist, otherwise fallback shows */}
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> {/* Better fallback */}
                  </Avatar>
                  <div>
                    {/* Ensure name uses foreground color */}
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
