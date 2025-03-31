'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Apply heading font */}
        <h2 className="font-heading text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8 text-primary-foreground/90"> {/* Slightly muted text */}
          Subscribe to our newsletter for the latest news and updates from Anisham Foundation
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input 
            type="email" 
            placeholder="Your email address"
            // Input uses theme variables automatically
            className="max-w-md bg-background/20 placeholder:text-primary-foreground/70 border-primary-foreground/50 focus:ring-primary-foreground"
            required
          />
          {/* Use accent color for the button */}
          <Button type="submit" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
