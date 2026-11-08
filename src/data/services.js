import fm from 'front-matter';

const files = import.meta.glob('../../content/services/*.md', { eager: true, query: '?raw', import: 'default' });

export const services = Object.values(files)
  .map(raw => fm(raw).attributes)
  .sort((a, b) => a.order - b.order);
