import fm from 'front-matter';

const files = import.meta.glob('../../content/locations/*.md', { eager: true, query: '?raw', import: 'default' });

export const locations = Object.values(files)
  .map(raw => {
    const { attributes, body } = fm(raw);
    return { ...attributes, body };
  })
  .sort((a, b) => a.order - b.order);
