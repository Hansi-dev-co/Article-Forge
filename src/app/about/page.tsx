import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenSquare, Bot, Zap } from 'lucide-react';

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
          About Article Forge
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are passionate about empowering creators with tools that blend simplicity and cutting-edge technology. Article Forge was born from a desire to make content creation more intuitive, efficient, and enjoyable.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Image
            src="https://placehold.co/600x500.png"
            alt="Team working on Article Forge"
            width={600}
            height={500}
            className="rounded-xl shadow-2xl"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
          <p>
            Our mission is to provide a seamless and intelligent writing experience. We believe that technology should assist, not complicate. By integrating AI in a meaningful way, we help you focus on what you do best: creating compelling stories and sharing your knowledge with the world.
          </p>
          <h3 className="font-headline text-2xl font-bold mt-8">The Technology</h3>
          <p>
            Article Forge is built on a modern tech stack to ensure a fast, reliable, and scalable platform. We leverage the power of Next.js for a performant web experience and Genkit for our state-of-the-art AI features.
          </p>
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold mb-12">Our Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <PenSquare className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Creator-Centric Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every feature is designed with the writer in mind. We prioritize a clean, distraction-free interface to keep you in the creative flow.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Bot className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Intelligent Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use AI to enhance your workflow, not replace it. From smart suggestions to content analysis, our AI is your creative partner.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Performance & Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A slow tool is a frustrating tool. We are committed to building a fast and responsive platform that keeps up with your ideas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
