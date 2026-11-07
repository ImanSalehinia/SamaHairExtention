import fm from 'front-matter';

const files = import.meta.glob('../../content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

export const blogPosts = Object.values(files)
  .map(raw => {
    const { attributes, body } = fm(raw);
    return { ...attributes, body };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
