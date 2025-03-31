// src/app/blog/[slug]/page.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, Share2, ArrowLeft } from 'lucide-react';

// Placeholder Data - Combine posts for lookup
// TODO: Replace with actual Markdown fetching/parsing logic
const allBlogPosts = [
  {
    slug: 'welcome-to-our-blog',
    title: 'Welcome to the Anisham Foundation Blog!',
    date: '2025-03-28',
    author: 'Anisham Team',
    excerpt: 'We are excited to launch our new blog! Here we will share updates, stories, insights, and resources related to our work in education and community development.',
    featuredImage: '/images/blog/welcome.jpg', // Placeholder
    tags: ['Foundation News', 'Welcome'],
    // Placeholder for actual Markdown content
    content: `
<p>Welcome to the official blog of the Anisham Foundation! We're thrilled to have this new space to connect with you – our supporters, partners, beneficiaries, and anyone interested in the power of education and community development.</p>
<p>For years, the Anisham Foundation has been dedicated to [mention core mission areas briefly]. Through this blog, we aim to:</p>
<ul>
  <li>Share updates on our ongoing projects and initiatives.</li>
  <li>Highlight the inspiring stories of the individuals and communities we serve.</li>
  <li>Offer insights and resources related to education, skill development, and social impact.</li>
  <li>Provide a platform for discussion and engagement around key issues.</li>
</ul>
<p>We believe that sharing knowledge and stories is crucial for building a stronger community and fostering positive change. We invite you to subscribe, comment, and join the conversation!</p>
<p>Stay tuned for regular posts!</p>
    `,
  },
  {
    slug: 'impact-of-digital-literacy',
    title: 'The Transformative Impact of Digital Literacy Training',
    date: '2025-04-05',
    author: 'Priya Singh',
    excerpt: 'Digital literacy is more than just using a computer; it opens doors to information, opportunities, and empowerment. Learn about the impact we\'ve seen firsthand.',
    featuredImage: '/images/blog/digital-impact.jpg', // Placeholder
    tags: ['Digital Literacy', 'Impact Stories', 'Training'],
    content: `
<p>In today's world, digital literacy is no longer a luxury – it's a fundamental skill. At the Anisham Foundation, we've witnessed firsthand how providing access to digital tools and training can transform lives.</p>
<h2 class="text-xl font-semibold my-3">Beyond Basic Skills</h2>
<p>Our digital literacy programs go beyond teaching basic computer operations. We focus on practical applications:</p>
<ul>
  <li>Accessing online educational resources.</li>
  <li>Utilizing digital communication tools effectively.</li>
  <li>Navigating online job portals and application processes.</li>
  <li>Understanding online safety and digital citizenship.</li>
</ul>
<p>The results have been remarkable. Participants report increased confidence, better access to information, and tangible improvements in their employment prospects. [Include a brief anonymized example or statistic if possible].</p>
<p>Investing in digital literacy is investing in a more equitable and empowered future.</p>
    `,
  },
   {
    slug: 'volunteer-spotlight-ravi',
    title: 'Volunteer Spotlight: Ravi Kumar\'s Journey',
    date: '2025-04-12',
    author: 'Anisham Team',
    excerpt: 'Meet Ravi Kumar, one of our dedicated volunteers making a difference in the mentorship program. Read about his motivations and experiences.',
    featuredImage: '/images/blog/volunteer-ravi.jpg', // Placeholder
    tags: ['Volunteering', 'Community'],
    content: `
<p>Volunteers are the heart of the Anisham Foundation. Today, we want to shine a spotlight on Ravi Kumar, who has been an invaluable part of our mentorship program for the past two years.</p>
<blockquote class="border-l-4 border-primary pl-4 italic my-4">
  "Seeing the growth and confidence build in the students I mentor is incredibly rewarding. It's about giving back and helping create opportunities I wish I had earlier," says Ravi.
</blockquote>
<p>Ravi dedicates several hours each week to guiding high school students, helping them with academic challenges, career exploration, and personal development. His commitment and positive attitude inspire both the students and our team.</p>
<p>Thank you, Ravi, and all our volunteers, for your dedication!</p>
    `,
  },
];

// Placeholder Components
const SocialShareButtons = () => (
    <div className="flex items-center space-x-2 mt-4">
        <span className="text-sm font-medium">Share:</span>
        {/* Replace with actual sharing links/components */}
        <Button variant="outline" size="icon" aria-label="Share on Twitter"><Share2 className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" aria-label="Share on Facebook"><Share2 className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" aria-label="Share on LinkedIn"><Share2 className="h-4 w-4" /></Button>
    </div>
);

const RelatedPostsSection: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
    // Simple logic: show first 2 posts that are not the current one
    const related = allBlogPosts.filter(p => p.slug !== currentSlug).slice(0, 2);
    if (related.length === 0) return null;

    return (
        <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map(post => (
                    <div key={post.slug} className="border rounded-lg p-3 text-sm hover:bg-gray-50">
                        <Link href={`/blog/${post.slug}`} passHref>
                            <span className="font-medium text-primary hover:underline cursor-pointer block mb-1">{post.title}</span>
                        </Link>
                        <p className="text-gray-600 text-xs">{post.excerpt.substring(0, 80)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


import { Metadata } from 'next';

type BlogPostParams = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = params;
  const post = allBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Anisham Foundation',
    };
  }
  
  return {
    title: `${post.title} - Anisham Foundation Blog`,
    description: post.excerpt,
  };
}

const BlogPostPage = ({ params }: BlogPostParams) => {
  const { slug } = params;
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the blog post you were looking for.</p>
          <Link href="/blog" passHref>
             <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
    );
  }

  return (
      <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        {/* Back Link */}
        <Link href="/blog" passHref>
           <span className="text-primary hover:underline mb-6 inline-flex items-center text-sm">
             <ArrowLeft className="mr-1 h-4 w-4" /> Back to All Posts
           </span>
        </Link>

        {/* Post Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
           <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> {post.date}</span>
           <span className="flex items-center"><User className="mr-1 h-4 w-4" /> {post.author}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
            <div className="mb-6">
                {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-600 mr-1 mb-1">
                        <Tag className="inline h-3 w-3 mr-1" />{tag}
                    </span>
                ))}
            </div>
         )}

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-64 md:h-80 w-full mb-8 rounded-lg overflow-hidden shadow-md">
            <Image src={post.featuredImage} alt={post.title} layout="fill" objectFit="cover" priority />
          </div>
        )}

        {/* Post Content - Rendered as HTML for now */}
        {/* TODO: Replace with proper Markdown rendering component */}
        <div
          className="prose lg:prose-lg max-w-none" // Using Tailwind Typography plugin classes
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Sharing */}
        <SocialShareButtons />

        {/* Related Posts */}
        <RelatedPostsSection currentSlug={post.slug} />

      </article>
  );
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  // In real app, get slugs from Markdown files
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default BlogPostPage;
