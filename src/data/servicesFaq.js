import fm from 'front-matter';

const files = import.meta.glob('../../content/servicesFaq.md', { eager: true, query: '?raw', import: 'default' });

export const servicesFaq = fm(Object.values(files)[0]).attributes;
