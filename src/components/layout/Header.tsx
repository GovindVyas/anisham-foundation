import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle'; // Import the ThemeToggle

const navGroups = [
  {
    title: 'About Us',
    items: [
      { href: '/about', label: 'About' },
      { href: '/impact', label: 'Impact' },
      { href: '/recognitions', label: 'Recognitions' },
    ],
  },
  {
    title: 'What We Do',
    items: [
      { href: '/training', label: 'Training' },
      { href: '/workshops', label: 'Workshops' },
      { href: '/business-meetings', label: 'Business Meetings' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { href: '/blog', label: 'Blog' },
      { href: '/events', label: 'Events' },
    ],
  },
];

const topLevelLinks = [
  { href: '/awards', label: 'Awards' },
  { href: '/contact', label: 'Contact' },
];

type HeaderProps = React.HTMLAttributes<HTMLElement>

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
      {...props}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Site Name/Logo Placeholder */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> // Placeholder for actual logo */}
            <span className="font-bold sm:inline-block">
              Anisham Foundation
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          {/* Add spacing between top-level items */}
          <NavigationMenuList className="space-x-6">
            {/* Add Home link */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {navGroups.map((group) => (
              <NavigationMenuItem key={group.title}>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"> {/* Ensure trigger background is transparent */}
                  {group.title}
                </NavigationMenuTrigger>
                {/* Ensure dropdown content has correct background */}
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                  <ul className="grid w-[200px] gap-1 p-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block w-full rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {topLevelLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <ThemeToggle /> {/* Add ThemeToggle for mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              {/* Add Home link to mobile menu */}
              <div className="flex flex-col gap-4 pt-6">
                 <Link
                    key="/"
                    href="/"
                    className="rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Home
                  </Link>
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-sm font-medium text-foreground/80">
                      {group.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                {topLevelLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right Section: Theme Toggle & Optional CTA */}
        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
          <ThemeToggle /> {/* Add ThemeToggle for desktop */}
          {/* Example CTA Button */}
          {/* <Button asChild variant="default" size="sm">
             <Link href="/donate">Donate</Link>
           </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
