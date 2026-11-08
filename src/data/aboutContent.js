import fm from 'front-matter';

const files = import.meta.glob('../../content/about.md', { eager: true, query: '?raw', import: 'default' });

export const aboutContent = fm(Object.values(files)[0]).attributes;
