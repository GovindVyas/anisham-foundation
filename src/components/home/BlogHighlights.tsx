'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const blogPosts = [
  {
    title: "Empowering Communities Through Education",
    excerpt: "How our vocational training programs are transforming lives in rural areas.",
    date: "March 15, 2025",
    slug: "empowering-communities"
  },
  {
    title: "The Future of Digital Literacy",
    excerpt: "Bridging the digital divide with our innovative training programs.",
    date: "February 28, 2025", 
    slug: "digital-literacy-future"
  },
  {
    title: "Success Stories: Entrepreneurship Program",
    excerpt: "Meet the graduates who launched their own businesses after our training.",
    date: "February 10, 2025",
    slug: "entrepreneurship-success"
  }
];

const BlogHighlights = () => {
  return (
    // Use default background to alternate with adjacent sections
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Apply heading font */}
        <h2 className="font-heading text-3xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            // Wrap Link/Card with motion.div for animation
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
              viewport={{ once: true }} // Animate only once
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                {/* Add scale hover effect */}
                <Card className="h-full border border-border bg-card text-card-foreground transition-all duration-300 group-hover:border-primary/50 dark:group-hover:border-primary group-hover:scale-[1.03]">
                  <CardHeader>
                    {/* CardTitle uses h3, should inherit font-heading */}
                    <CardTitle className="group-hover:text-primary dark:group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    {/* Change date color */}
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12"> {/* Increased margin top */}
          {/* Use accent color for this button */}
          <Button variant="default" size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
