import fm from 'front-matter';

const files = import.meta.glob('../../content/gallery/*.md', { eager: true, query: '?raw', import: 'default' });

export const galleryItems = Object.values(files)
  .map(raw => fm(raw).attributes)
  .sort((a, b) => a.id - b.id);
