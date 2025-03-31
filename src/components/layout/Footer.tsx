import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; // Import icons

// Use type alias instead of empty interface
type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-muted text-muted-foreground', className)} {...props}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: About/Contact */}
          <div>
            {/* Apply heading font */}
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Anisham Foundation</h3>
            <p className="text-sm mb-3">
              Dedicated to education and community development.
            </p>
            <p className="text-sm">
              Email: <a href="mailto:info@anishamfoundation.org" className="hover:text-primary dark:hover:text-primary">info@anishamfoundation.org</a><br />
              {/* Phone: +1 234 567 890 */}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            {/* Apply heading font */}
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {/* Update link hover styles */}
              <li><Link href="/about" className="hover:text-primary dark:hover:text-primary">About Us</Link></li>
              <li><Link href="/training" className="hover:text-primary dark:hover:text-primary">Training Programs</Link></li>
              <li><Link href="/events" className="hover:text-primary dark:hover:text-primary">Events</Link></li>
              <li><Link href="/blog" className="hover:text-primary dark:hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Social */}
          <div>
            {/* Apply heading font */}
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Connect & Legal</h3>
            <ul className="space-y-2 text-sm mb-4">
              {/* Update link hover styles */}
              <li><Link href="/privacy-policy" className="hover:text-primary dark:hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary dark:hover:text-primary">Terms of Service</Link></li>
            </ul>
            {/* Replace placeholders with actual icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary dark:hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary dark:hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary dark:hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary dark:hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm">
          © {currentYear} Anisham Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
