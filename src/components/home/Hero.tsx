import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Primary Overlay */}
      <div className="absolute inset-0 bg-primary/90"> {/* Simplified overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity" /> {/* Adjusted blend and opacity */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground sm:px-6"> {/* Use primary-foreground for text */}
        <div className="max-w-4xl space-y-6">
          {/* Apply heading font */}
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Empowering Communities Through Education
          </h1>
          <p className="text-lg text-primary-foreground/90 sm:text-xl"> {/* Adjusted size and opacity */}
            The Anisham Foundation is dedicated to creating opportunities and 
            transforming lives through innovative education programs and 
            community development initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {/* Primary button - uses default variant which is now our primary color */}
            <Button asChild size="lg" className="text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/training">Explore Programs</Link>
            </Button>
            {/* Secondary button - changed to outline for better contrast */}
            <Button asChild variant="outline" size="lg" className="text-lg border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
