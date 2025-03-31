import Hero from '@/components/home/Hero';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import ImpactMetrics from '@/components/home/ImpactMetrics';
import Testimonials from '@/components/home/Testimonials';
import EventsPreview from '@/components/home/EventsPreview';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import BlogHighlights from '@/components/home/BlogHighlights';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPrograms />
      <ImpactMetrics />
      <Testimonials />
      <EventsPreview />
      <BlogHighlights />
      <NewsletterSignup />
    </main>
  );
}
