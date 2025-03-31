# Project Requirements Document (PRD): Anisham Foundation Website

**Version:** 1.0
**Date:** March 27, 2025
**Author:** Cline (AI Software Engineer)

## 1. Introduction & Overview

This document outlines the requirements for the development of a new static website for the Anisham Foundation, a non-profit organization dedicated to education and community development. The website will serve as a central hub for information, engagement, and showcasing the foundation's impact. It will be built using modern web technologies (Next.js, Tailwind CSS, shadcn/ui) to ensure a professional, performant, accessible, and maintainable online presence.

## 2. Goals & Objectives

*   **Increase Awareness:** Clearly communicate the foundation's mission, vision, values, and programs to a wider audience.
*   **Showcase Impact:** Effectively demonstrate the positive outcomes and success stories resulting from the foundation's work.
*   **Facilitate Engagement:** Enable users to easily register for training, workshops, events, and meetings.
*   **Support Operations:** Provide clear information about awards, recognitions, and application/nomination processes.
*   **Build Trust & Credibility:** Establish a professional and trustworthy online presence that reflects the foundation's values.
*   **Serve as a Resource:** Offer valuable content through a blog and detailed program information.

## 3. Target Audience

*   **Potential Beneficiaries:** Individuals and communities seeking educational programs and support.
*   **Donors & Supporters:** Individuals and organizations interested in contributing financially or otherwise.
*   **Partners & Collaborators:** NGOs, corporations, and government agencies looking to partner with the foundation.
*   **Volunteers:** Individuals seeking opportunities to contribute their time and skills.
*   **Media & General Public:** Journalists, researchers, and the public seeking information about the foundation.

## 4. Design & Branding Guidelines

*   **Color Palette:** (Reflects education and community development. Since no existing guidelines, proposed starting point:)
    *   Primary: Blue (e.g., `#005A9C` - Trust, Stability)
    *   Secondary: Green (e.g., `#4CAF50` - Growth, Community)
    *   Accent: Orange/Yellow (e.g., `#FF9800` - Energy, Call to Action)
    *   Neutrals: Grays and whites (`#F8F9FA`, `#6c757d`, `#212529`).
    *   *(Note: Palette is flexible and can be refined during development).*
*   **Typography:** Clean, readable sans-serif fonts (e.g., Inter, Poppins) suitable for web content.
*   **Imagery:** High-quality, authentic photos and videos showcasing the foundation's work, team, and beneficiaries. Avoid generic stock photos where possible.
*   **UI Components:** Utilize `shadcn/ui` components for consistency, accessibility, and a modern look and feel. Adhere to Tailwind CSS utility-first principles for styling.

## 5. Technical Requirements

*   **Frontend Framework:** Next.js (App Router preferred for latest features)
*   **Styling:** Tailwind CSS
*   **UI Component Library:** shadcn/ui
*   *   **Rendering Strategy:** Static Site Generation (SSG) via `next export` for compatibility with GitHub Pages.
*   **Deployment:** GitHub Pages (Requires static export. Note limitations: No built-in Image Optimization, ISR, API Routes, Middleware, SSR).
*   **Version Control:** Git (Repository hosted on GitHub, GitLab, or similar).
*   **Package Manager:** npm or yarn.

## 6. Functional Requirements (Page-by-Page)

**Common Elements:**
*   **Header:** Logo, Navigation Menu, Search (Optional), CTA (e.g., Donate).
*   **Footer:** Copyright, Privacy Policy, Terms of Service, Social Media Links, Contact Info, Sitemap Link.
*   **Responsive Design:** Fully responsive layout adapting seamlessly to mobile, tablet, and desktop screen sizes.
*   **Accessibility:** Adherence to WCAG 2.1 AA guidelines. Semantic HTML, ARIA attributes, keyboard navigation.

**6.1. Home Page (`/`)**
*   **Hero Section:** Compelling headline, brief mission statement, high-quality background image/video, clear Call-to-Action (CTA) buttons (e.g., "Learn More", "Donate Now", "Get Involved").
*   **Featured Programs:** Overview of key training/initiatives (e.g., using Card components) with links to respective pages.
*   **Impact Metrics:** Visually engaging section showcasing key statistics (e.g., people trained, funds raised, projects completed) using counters or simple infographics.
*   **Upcoming Events/News:** Brief section highlighting 1-2 upcoming events or recent blog posts.
*   **Testimonials/Success Snippets:** Short quotes or highlights linking to full stories.
*   **Partner Logos (Optional):** Showcase key partners or sponsors.

**6.2. About Page (`/about`)**
*   **History:** Narrative or timeline detailing the foundation's origins and milestones.
*   **Team:** Section introducing key team members/leadership with photos and brief bios (consider a grid layout).
*   **Vision, Mission, Values:** Clearly articulated statements.
*   **Board of Directors/Advisors (Optional):** Similar to the Team section if applicable.
*   **Annual Reports/Financials (Optional):** Links to downloadable reports for transparency.

**6.3. Training Page (`/training`)**
*   **Program Categories:** Ability to filter or browse programs by category (e.g., tabs, dropdown, sidebar).
*   **Program Listings:** Cards or list view for each program, showing title, brief description, and possibly target audience/duration.
*   **Individual Program Detail Page (`/training/[slug]`)**:
    *   Detailed description, learning objectives, curriculum outline.
    *   Schedule/Dates, Instructor(s) bio.
    *   Prerequisites, Target audience.
    *   Registration System: Simple embedded form (e.g., using Formspree or similar service) sending submission data to a designated foundation email address.
    *   Related Success Stories/Testimonials.
*   **Success Stories Section:** Dedicated area or links to case studies/testimonials from program graduates.

**6.4. Workshop Page (`/workshops`)**
*   **Focus:** Specifically for NGO-focused seminars/workshops.
*   **Calendar/List View:** Display upcoming workshops with dates, topics, and target audience. Filter options (e.g., by date, topic).
*   **Registration Portal:**
    *   Simple embedded form per workshop.
*   **Past Workshop Archives:** Section listing past workshops. Future materials (slides, recordings if applicable) to be viewable online (e.g., embedded PDFs, video links).

**6.5. Events Page (`/events`)**
*   **Upcoming/Past Toggle:** Allow users to switch between viewing upcoming and past events.
*   **Event Listings:** Grid or list view displaying event title, date, location (if applicable), brief description, and thumbnail image.
*   **Individual Event Detail Page (`/events/[slug]`)**:
    *   Full event details, schedule, speakers/guests.
    *   Image Gallery: Display photos/videos from the event (especially for past events).
    *   Registration Functionality (for upcoming events): Simple embedded form.
*   **Filtering/Categorization (Optional):** Allow filtering by event type or date range.

**6.6. Recognitions Page (`/recognitions`)**
*   **Awards Gallery:** Visually appealing display of awards/accolades received by the foundation or its members (e.g., logos, certificates).
*   **Recipient Profiles:** Section highlighting individuals or projects recognized, with details and photos.
*   **Nomination Process:** Clear instructions. May include a downloadable form or an online embedded form for submissions.

**6.7. Business Meeting Page (`/business-meetings`)**
*   **Focus:** Networking events, possibly industry-specific.
*   **Events Calendar/List:** Display upcoming networking meetings with dates, topics, venue/platform.
*   **Registration System:**
    *   *(Assumption)* Simple embedded form or link to an external registration platform per meeting.
*   **Past Meeting Highlights:** Summaries, key takeaways, photos, or presentations from previous meetings.

**6.8. Awards Page (`/awards`)**
*   **Focus:** Awards *given* by the foundation.
*   **Award Categories:** Clear listing and description of different award categories offered by the foundation.
*   **Criteria:** Detailed eligibility and selection criteria for each award.
*   **Application Process:** Step-by-step instructions. May involve downloadable forms or an online embedded submission form.
*   **Past Winners:** Showcase previous award recipients (list, profiles, year).

**6.9. Implementation Page (`/implementation` or `/impact`)**
*   **Case Studies:** Detailed descriptions of specific projects undertaken by the foundation, outlining challenges, solutions, and outcomes.
*   **Project Impacts:** Focus on the tangible results and benefits delivered through the projects. Use data, visuals, and storytelling.
*   **Success Metrics:** Display key performance indicators (KPIs) related to project implementation and overall foundation goals (can overlap with Home page metrics but provide more detail here).
*   **Geographic Reach (Optional):** Map or list showing areas where the foundation operates.

**6.10. Blog Page (`/blog`)**
*   **Content Management:** Content managed via Markdown (.md or .mdx) files within the Git repository.
*   **Article Listings:** Display blog posts chronologically (newest first) with title, author, date, excerpt, and featured image. Pagination will be required.
*   **Categorization/Tags:** Allow filtering posts by category or tag.
*   **Individual Article Page (`/blog/[slug]`)**:
    *   Full article content, author bio, date, categories/tags.
    *   Social sharing buttons.
    *   Related posts section.
*   **Search Functionality (Optional but Recommended):** Allow users to search blog content.

**6.11. Contact Page (`/contact`)**
*   **Contact Form:**
    *   Fields: Name (required), Email (required, validated), Subject (required), Message (required).
    *   Submission: Simple mechanism (e.g., Formspree or similar) sending data to a designated foundation email. Clear success/error messages.
    *   Accessibility: Proper labels, input types, and ARIA attributes.
*   **Contact Information:**
    *   Display foundation's physical address.
    *   Display phone number (clickable `tel:` link).
    *   Display email address (clickable `mailto:` link).
*   **Map (Optional):** Embedded map showing the foundation's location (e.g., Google Maps).
*   **Social Media Links (Optional):** Links to the foundation's social media profiles.

## 7. Non-Functional Requirements

*   **Performance:**
    *   Fast load times (Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1).
    *   Optimized images (appropriate formats like WebP, correct sizing, lazy loading).
    *   Code splitting and efficient JavaScript bundles.
    *   Target high Lighthouse scores (Performance, Accessibility, Best Practices, SEO > 90).
*   **SEO (Search Engine Optimization):**
    *   Semantic HTML structure.
    *   Unique and descriptive `<title>` tags and `meta description` for each page.
    *   Open Graph and Twitter Card meta tags for social sharing.
    *   Generation of `sitemap.xml` and `robots.txt`.
    *   Use of structured data (Schema.org) where appropriate (e.g., Events, Articles, Organization).
*   **Security:**
    *   HTTPS enforced.
    *   Regular dependency updates to patch vulnerabilities.
    *   Sanitization of any user input (if forms submit directly, though less common for pure static).
    *   Appropriate CORS configuration if interacting with external APIs.
*   **Maintainability:**
    *   Clean, well-documented code adhering to React/Next.js best practices.
    *   Consistent coding style (use Prettier/ESLint).
    *   Modular component structure.
*   **Browser Compatibility:** Support for the latest versions of major browsers (Chrome, Firefox, Safari, Edge).

## 8. Future Considerations (Optional)

*   **Multilingual Support:** Adding translations for different languages.
*   **Donation Integration:** Direct integration with payment gateways (e.g., Stripe, PayPal) instead of just linking out.
*   **User Accounts:** Login system for beneficiaries or members (would require a backend).
*   **Advanced Search:** More robust site-wide search capabilities (e.g., Algolia).
*   **Interactive Elements:** More dynamic charts or maps for impact visualization.
