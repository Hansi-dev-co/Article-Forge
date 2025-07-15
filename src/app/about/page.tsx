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

      <div className="mt-16 prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl font-bold text-center">How We Are Made</h2>

        <h3 className="font-headline text-2xl font-bold mt-8">High-Level Purpose</h3>
        <p>
          Article Forge is a modern web application designed for writers, bloggers, and content creators. Its primary goal is to provide a streamlined and intelligent environment for crafting articles. It combines a user-friendly Markdown editor with AI-powered assistance to make the writing and publishing process more efficient.
        </p>

        <h3 className="font-headline text-2xl font-bold mt-8">Core Features & Pages</h3>
        
        <h4>Homepage (/)</h4>
        <p>
          <strong>Function:</strong> This is the main landing page that introduces new users to the application.<br/>
          <strong>Content:</strong> It features a prominent headline, a brief description of what Article Forge does, and clear call-to-action buttons that guide users to either start creating (/upload) or learn more about the platform (/about). It also highlights key features like the editor, AI tagging, and user accounts.
        </p>
        
        <h4>Article Editor & Upload Page (/upload)</h4>
        <p>
          <strong>Function:</strong> This is the heart of the application where users write and edit their content.
        </p>
        <ul>
          <li><strong>Markdown Editor:</strong> A simple text area with toolbar buttons for basic formatting like bold, italic, and embedding images.</li>
          <li><strong>File Upload:</strong> Users can upload existing articles (.txt or .md files) from their computer directly into the editor.</li>
          <li><strong>Live Preview:</strong> A tab to instantly see how the formatted Markdown content will appear as rendered HTML.</li>
          <li><strong>AI Tag Suggestions:</strong> A key feature where users can click a button to have Genkit's AI analyze the article's content and automatically suggest relevant tags.</li>
        </ul>
        
        <h4>About Page (/about)</h4>
        <p>
          <strong>Function:</strong> Provides background information on the application's mission and the technology it uses.<br/>
          <strong>Content:</strong> It explains the core principles behind Article Forge: being creator-centric, using AI as an intelligent assistant, and prioritizing performance. It mentions the use of Next.js and Genkit.
        </p>

        <h4>Login Page (/login)</h4>
        <p>
          <strong>Function:</strong> A standard, visually appealing page for user authentication.<br/>
          <strong>Content:</strong> It includes a form for an email and password. Currently, this is a placeholder UI and doesn't have a functional authentication system connected.
        </p>

        <h3 className="font-headline text-2xl font-bold mt-8">Technical Stack & Architecture</h3>
        <ul>
            <li><strong>Frontend:</strong> Built with Next.js and React, ensuring a fast, server-rendered user experience. The UI components are from ShadCN UI, styled with Tailwind CSS, giving it a modern and clean look.</li>
            <li><strong>Backend & AI:</strong> Next.js also serves as the web backend, handling page routing and server-side rendering. Genkit is used for the AI functionality. The "Suggest Tags" feature is powered by a Genkit flow that sends the article content to a Google AI model (Gemini) and gets structured tag suggestions back.</li>
            <li><strong>User Experience:</strong> The application is fully responsive and works on both desktop and mobile devices. It includes a dark/light theme toggle in the header, allowing users to choose their preferred viewing mode, with the preference remembered.</li>
        </ul>
        <p>
          In essence, Article Forge is a well-structured starter project that demonstrates how to build a modern, full-stack web application with integrated AI features using a professional and scalable tech stack.
        </p>
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
