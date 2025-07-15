"use client";

import { useState, useRef, type ChangeEvent, type FC } from 'react';
import { Bold, Italic, Image as ImageIcon, Sparkles, Loader2, Upload } from 'lucide-react';
import { suggestTags } from '@/ai/flows/suggest-tags';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const ArticleForgePage: FC = () => {
  const [title, setTitle] = useState<string>('My Awesome Article');
  const [content, setContent] = useState<string>("This is an article about the future of technology. I will discuss **Artificial Intelligence**, *Extended Reality*, and maybe even a bit of Quantum Computing.");
  const [tags, setTags] = useState<string[]>(['Technology', 'Innovation']);
  const [isLoadingTags, setIsLoadingTags] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFormat = (formatType: 'bold' | 'italic') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const wrapChar = formatType === 'bold' ? '**' : '*';
    const newText = `${content.substring(0, start)}${wrapChar}${selectedText}${wrapChar}${content.substring(end)}`;

    setContent(newText);
    textarea.focus();
    setTimeout(() => {
        textarea.selectionStart = start + wrapChar.length;
        textarea.selectionEnd = end + wrapChar.length;
    }, 0);
  };

  const handleImageEmbed = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const placeholderImage = '![Image Description](https://placehold.co/600x400.png)';
    const start = textarea.selectionStart;
    
    const newContent = `${content.substring(0, start)}\n${placeholderImage}\n${content.substring(start)}`;
    setContent(newContent);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('text/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          setContent(text);
          toast({
            title: 'File Uploaded',
            description: `"${file.name}" has been loaded into the editor.`,
          });
        };
        reader.onerror = () => {
            toast({
                title: 'Error Reading File',
                description: 'There was an error reading the file.',
                variant: 'destructive',
            });
        };
        reader.readAsText(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a plain text file (e.g., .txt, .md).',
          variant: 'destructive',
        });
      }
    }
    // Reset file input to allow uploading the same file again
    if(event.target) {
        event.target.value = '';
    }
  };


  const handleSuggestTags = async () => {
    if (!content.trim()) {
      toast({
        title: "Content is empty",
        description: "Please write something in the article before suggesting tags.",
        variant: 'destructive',
      });
      return;
    }
    setIsLoadingTags(true);
    try {
      const result = await suggestTags({ articleContent: content });
      setTags(Array.from(new Set([...tags, ...result.tags])));
      toast({
        title: "Tags Suggested",
        description: "New tags have been added based on your article's content.",
      });
    } catch (error) {
      console.error("Error suggesting tags:", error);
      toast({
        title: "Error",
        description: "Could not suggest tags. Please try again later.",
        variant: 'destructive',
      });
    } finally {
      setIsLoadingTags(false);
    }
  };

  const renderPreview = () => {
    const htmlContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="rounded-lg my-4 max-w-full h-auto shadow-md" data-ai-hint="article image" />')
      .replace(/\n/g, '<br />');

    return (
      <div 
        className="prose prose-lg dark:prose-invert max-w-none" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">Article Forge</h1>
        <p className="text-muted-foreground mt-2 text-lg">Craft, format, and tag your articles with ease.</p>
      </header>

      <main className="w-full max-w-4xl">
        <Card className="shadow-2xl shadow-primary/10">
          <CardHeader>
            <CardTitle className="font-headline text-2xl tracking-wide">Create New Article</CardTitle>
            <CardDescription>Fill in the details below to start your masterpiece.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-lg font-medium">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  placeholder="Your article title"
                  className="mt-2 text-lg p-4"
                />
              </div>

              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-muted rounded-md border">
                        <Button variant="ghost" size="icon" onClick={() => handleFormat('bold')} aria-label="Bold">
                            <Bold className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleFormat('italic')} aria-label="Italic">
                            <Italic className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleImageEmbed} aria-label="Embed Image">
                            <ImageIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleUploadClick} aria-label="Upload Article">
                            <Upload className="h-5 w-5" />
                        </Button>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            className="hidden" 
                            accept="text/plain,text/markdown,.md,.txt"
                        />
                    </div>
                    <Textarea
                      ref={textareaRef}
                      value={content}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                      placeholder="Start writing your amazing article here..."
                      className="min-h-[400px] text-base p-4"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="preview">
                    <div className="min-h-[400px] rounded-md border bg-muted/30 p-4">
                        <h2 className="font-headline text-3xl font-bold mb-4 border-b pb-2">{title}</h2>
                        {renderPreview()}
                    </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <div>
              <Label className="text-lg font-medium">Tags</Label>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3 cursor-pointer hover:bg-primary/20">{tag}</Badge>
                ))}
              </div>
            </div>
            <Button onClick={handleSuggestTags} disabled={isLoadingTags} variant="outline">
              {isLoadingTags ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4 text-accent" />
              )}
              {isLoadingTags ? 'Analyzing...' : 'Suggest Tags with AI'}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default ArticleForgePage;
