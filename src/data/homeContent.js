import fm from 'front-matter';

const files = import.meta.glob('../../content/home.md', { eager: true, query: '?raw', import: 'default' });

export const homeContent = fm(Object.values(files)[0]).attributes;
