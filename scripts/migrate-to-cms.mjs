import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------- 1. Migrate galleryItems.js ----------
const galleryFilePath = path.join(root, 'src/data/galleryItems.js');
const gallerySrc = fs.readFileSync(galleryFilePath, 'utf8');

// Map import variable name -> filename
const importMap = {};
const importRe = /import (\w+) from '\.\.\/assets\/gallery\/([^']+)';/g;
let m;
while ((m = importRe.exec(gallerySrc))) {
  importMap[m[1]] = m[2];
}

// Extract the array literal
const arrStart = gallerySrc.indexOf('export const galleryItems = [');
const arrBody = gallerySrc.slice(arrStart + 'export const galleryItems = '.length);
// Replace `img: varName` with `img: "filename.jpg"`
const arrBodyResolved = arrBody.replace(/img:\s*(\w+)/g, (full, varName) => {
  const filename = importMap[varName];
  if (!filename) throw new Error(`Unknown image variable: ${varName}`);
  return `img: ${JSON.stringify(filename)}`;
});

const galleryRaw = new Function(`return ${arrBodyResolved}`)();

const galleryUploadsDir = path.join(root, 'public/uploads/gallery');
const galleryAssetsDir = path.join(root, 'src/assets/gallery');

const migratedGallery = galleryRaw.map(item => {
  const srcFile = path.join(galleryAssetsDir, item.img);
  const destFile = path.join(galleryUploadsDir, item.img);
  fs.copyFileSync(srcFile, destFile);
  return { ...item, img: `/uploads/gallery/${item.img}` };
});

// Write content/gallery/<id>-<slug>.md
const contentGalleryDir = path.join(root, 'content/gallery');
for (const item of migratedGallery) {
  const slug = `${item.id}-${slugify(item.label)}`;
  const fm = [
    '---',
    `id: ${item.id}`,
    `category: "${item.category}"`,
    `label: "${item.label.replace(/"/g, '\\"')}"`,
    `desc: "${item.desc.replace(/"/g, '\\"')}"`,
    `img: "${item.img}"`,
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(contentGalleryDir, `${slug}.md`), fm, 'utf8');
}

console.log(`Migrated ${migratedGallery.length} gallery items.`);

// ---------- 2. Migrate blogPosts.js ----------
const blogFilePath = path.join(root, 'src/data/blogPosts.js');
let blogSrc = fs.readFileSync(blogFilePath, 'utf8');

// Replace the galleryItems import with an inline constant built from the already-migrated data
blogSrc = blogSrc.replace(
  "import { galleryItems } from './galleryItems';",
  `const galleryItems = ${JSON.stringify(migratedGallery)};`
);
blogSrc = blogSrc.replace('export const blogPosts', 'const blogPosts');
blogSrc += '\nreturn blogPosts;';

const blogPosts = new Function(blogSrc)();

function escapeMd(text) {
  return text;
}

function blockToMarkdown(block) {
  if (block.type === 'p') {
    return `${escapeMd(block.text)}\n\n`;
  }
  if (block.type === 'h3') {
    return `### ${escapeMd(block.text)}\n\n`;
  }
  if (block.type === 'list') {
    let out = '';
    if (block.intro) out += `${escapeMd(block.intro)}\n\n`;
    out += block.items.map(i => `- ${escapeMd(i)}`).join('\n');
    out += '\n\n';
    return out;
  }
  if (block.type === 'table') {
    let out = `| ${block.headers.join(' | ')} |\n`;
    out += `| ${block.headers.map(() => '---').join(' | ')} |\n`;
    for (const row of block.rows) {
      out += `| ${row.join(' | ')} |\n`;
    }
    out += '\n';
    return out;
  }
  return '';
}

function postToMarkdownBody(post) {
  let body = '';
  if (post.intro) {
    body += post.intro.map(p => `${escapeMd(p)}\n\n`).join('');
  }
  for (const section of post.sections) {
    body += `## ${escapeMd(section.heading)}\n\n`;
    for (const block of section.content) {
      body += blockToMarkdown(block);
    }
  }
  return body.trim() + '\n';
}

const contentBlogDir = path.join(root, 'content/blog');
for (const post of blogPosts) {
  const fm = [
    '---',
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: "${post.slug}"`,
    `category: "${post.category}"`,
    `date: "${post.date}"`,
    `readTime: "${post.readTime}"`,
    `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
    `img: "${post.img}"`,
    '---',
    '',
  ].join('\n');
  const body = postToMarkdownBody(post);
  fs.writeFileSync(path.join(contentBlogDir, `${post.slug}.md`), fm + body, 'utf8');
}

console.log(`Migrated ${blogPosts.length} blog posts.`);
