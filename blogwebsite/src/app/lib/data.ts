export interface Post {
    id: string;
    title: string;
    content: string;
  }
  
  // Simulating an async data fetch
  export async function getPosts(): Promise<Post[]> {
    // In a real app, this would be a database or API call
    return [
      {
        id: '1',
        title: 'Introduction to Next.js 13',
        content: 'Next.js 13 introduces several new features including an improved routing system, server components, and more...'
      },
      {
        id: '2',
        title: 'Working with React Server Components',
        content: 'React Server Components allow you to write UI that can be rendered and optionally cached on the server...'
      },
      {
        id: '3',
        title: 'Styling in Next.js 13',
        content: 'Next.js 13 supports various styling options including CSS Modules, Sass, and CSS-in-JS solutions...'
      }
    ];
  }
  
  export async function getPostById(id: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find(p => p.id === id);
  }
  
  