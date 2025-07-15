import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Lightbulb, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="flex flex-col">
      <section className="text-center py-20 sm:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
            Welcome to Article Forge
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            The ultimate platform to effortlessly craft, format, and enhance your articles with the power of AI.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/upload">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="font-headline text-3xl font-bold">What is Article Forge?</h2>
                <p>
                    Article Forge is a revolutionary tool designed for writers, bloggers, and content creators who want to streamline their writing process. From drafting and formatting with Markdown to generating intelligent tags, we provide everything you need to produce high-quality content faster.
                </p>
                <ul>
                    <li>Intuitive Markdown editor with live preview.</li>
                    <li>AI-powered tag suggestions to improve discoverability.</li>
                    <li>Simple file uploads to bring in your existing work.</li>
                    <li>Clean, modern, and focused writing environment.</li>
                </ul>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Article Forge Editor"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="digital editor screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">Key Features</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Discover the tools that will elevate your writing experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Upload Articles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Easily upload your existing articles in text or markdown format and continue your work right where you left off.
                </CardDescription>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>AI Tag Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Let our intelligent AI analyze your content and suggest relevant tags to boost your article's visibility and organization.
                </CardDescription>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <LogIn className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Easy Login</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Create an account to save your work, manage your articles, and access your content from anywhere.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
