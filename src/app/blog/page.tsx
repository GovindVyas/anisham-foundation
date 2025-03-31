// src/app/blog/page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

// Placeholder Data - Replace with actual data fetched from Markdown files
// TODO: Implement logic to read Markdown files (e.g., using gray-matter, remark)
const blogPosts = [
  {
    slug: 'welcome-to-our-blog',
    title: 'Welcome to the Anisham Foundation Blog!',
    date: '2025-03-28',
    author: 'Anisham Team',
    excerpt: 'We are excited to launch our new blog! Here we will share updates, stories, insights, and resources related to our work in education and community development.',
    featuredImage: '/images/blog/welcome.jpg', // Placeholder
    tags: ['Foundation News', 'Welcome'],
  },
  {
    slug: 'impact-of-digital-literacy',
    title: 'The Transformative Impact of Digital Literacy Training',
    date: '2025-04-05',
    author: 'Priya Singh',
    excerpt: 'Digital literacy is more than just using a computer; it opens doors to information, opportunities, and empowerment. Learn about the impact we\'ve seen firsthand.',
    featuredImage: '/images/blog/digital-impact.jpg', // Placeholder
    tags: ['Digital Literacy', 'Impact Stories', 'Training'],
  },
   {
    slug: 'volunteer-spotlight-ravi',
    title: 'Volunteer Spotlight: Ravi Kumar\'s Journey',
    date: '2025-04-12',
    author: 'Anisham Team',
    excerpt: 'Meet Ravi Kumar, one of our dedicated volunteers making a difference in the mentorship program. Read about his motivations and experiences.',
    featuredImage: '/images/blog/volunteer-ravi.jpg', // Placeholder
    tags: ['Volunteering', 'Community'],
  },
];

// Placeholder Components
const PostCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => (
  <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
    {post.featuredImage && (
      <Link href={`/blog/${post.slug}`} passHref>
        <div className="relative h-48 w-full cursor-pointer">
          <Image src={post.featuredImage} alt={post.title} layout="fill" objectFit="cover" />
        </div>
      </Link>
    )}
    <div className="p-4 flex flex-col flex-grow">
      <CardHeader className="p-0 mb-2">
        <Link href={`/blog/${post.slug}`} passHref>
           <CardTitle className="text-xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
        </Link>
        <CardDescription className="text-xs text-gray-500 flex items-center space-x-3 mt-1">
          <span className="flex items-center"><Calendar className="mr-1 h-3 w-3" /> {post.date}</span>
          <span className="flex items-center"><User className="mr-1 h-3 w-3" /> {post.author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
      </CardContent>
      <div className="mt-auto">
         <Link href={`/blog/${post.slug}`} passHref>
            <span className="text-primary hover:underline font-medium text-sm cursor-pointer">Read More &rarr;</span>
         </Link>
         {/* Optional: Display tags */}
         {post.tags && post.tags.length > 0 && (
            <div className="mt-3">
                {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-600 mr-1 mb-1">
                        #{tag}
                    </span>
                ))}
            </div>
         )}
      </div>
    </div>
  </Card>
);

// Removed unused BlogControls placeholder
// const BlogControls = () => ( ... );


const BlogPage: React.FC = () => {
  // TODO: Add pagination logic
  const postsToShow = blogPosts; // Show all for now

  return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Anisham Foundation Blog
        </h1>

        {/* Optional Controls */}
        {/* <BlogControls /> */}

        {/* Blog Post Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsToShow.length > 0 ? (
            postsToShow.map(post => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-gray-600 col-span-full text-center">No blog posts found.</p>
          )}
        </div>

        {/* TODO: Add Pagination controls */}

      </div>
  );
};

export default BlogPage;
