import type {Metadata} from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Article Forge',
  description: 'Create and format articles with AI-powered tagging.',
};

const Header = () => (
  <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between p-4">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary font-headline">
        <PenSquare className="h-6 w-6" />
        Article Forge
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="/upload" className="text-foreground/80 hover:text-foreground transition-colors">Upload</Link>
        <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  </header>
);

const Footer = () => (
    <footer className="bg-card/50 border-t">
        <div className="container mx-auto p-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-8 mb-4">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="/upload" className="hover:text-primary transition-colors">Upload</Link>
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/login" className="hover:text-primary transition-colors">Login</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Article Forge. All rights reserved.</p>
        </div>
    </footer>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
