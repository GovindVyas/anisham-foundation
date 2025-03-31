import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

const inter = Inter({
  variable: "--font-inter", // Variable for body text
  subsets: ["latin"],
  display: 'swap', // Ensure text remains visible during font load
});

// Configure Poppins for headings
const poppins = Poppins({
  variable: "--font-heading", // Variable for headings
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], // Include necessary weights
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anisham Foundation",
  description: "Dedicated to education and community development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning for theme compatibility
    <html lang="en" suppressHydrationWarning={true}>
      <body
        // Add Poppins variable and ensure antialiased is applied
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {/* Wrap with ThemeProvider for dark mode toggle */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // Optional: disable transitions on theme change
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
