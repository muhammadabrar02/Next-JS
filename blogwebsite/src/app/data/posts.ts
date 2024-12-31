export interface Post {
    id: string;
    title: string;
    content: string;
}

export const posts: Post[] = [
    {
        id: '1',
        title: 'Introduction to Next.js',
        content: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites...'
    },
    {
        id: '2',
        title: 'Working with React Hooks',
        content: 'React Hooks are functions that let you use state and other React features in functional components...'
    },
    {
        id: '3',
        title: 'CSS-in-JS Solutions',
        content: 'CSS-in-JS is a styling technique where JavaScript is used to style components...'
    }
];

