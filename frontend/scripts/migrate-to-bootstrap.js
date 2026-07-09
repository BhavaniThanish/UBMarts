const fs = require('fs');
const path = require('path');

const DIR = './src';

// Mapping of Tailwind to Bootstrap 5
const map = {
  'flex': 'd-flex',
  'flex-col': 'flex-column',
  'items-center': 'align-items-center',
  'items-start': 'align-items-start',
  'items-end': 'align-items-end',
  'justify-center': 'justify-content-center',
  'justify-between': 'justify-content-between',
  'justify-start': 'justify-content-start',
  'justify-end': 'justify-content-end',
  'w-full': 'w-100',
  'h-full': 'h-100',
  'hidden': 'd-none',
  'md:block': 'd-md-block',
  'md:flex': 'd-md-flex',
  'lg:flex': 'd-lg-flex',
  'rounded-full': 'rounded-circle',
  'gap-2': 'gap-2',
  'gap-3': 'gap-3',
  'gap-4': 'gap-4',
  'gap-5': 'gap-5',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Find all className="..." or className={`...`}
  content = content.replace(/className=(["'])(.*?)\1/g, (match, quote, classes) => {
    const newClasses = classes.split(' ').map(c => map[c] || c).join(' ');
    return `className=${quote}${newClasses}${quote}`;
  });

  content = content.replace(/className=\{`([^`]+)`\}/g, (match, classes) => {
    // This is a bit harder because of dynamic ${} blocks, but we can just map fixed words
    const newClasses = classes.split(' ').map(c => map[c] || c).join(' ');
    return `className={\`${newClasses}\`}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Migrated ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverse(DIR);
console.log('Migration complete.');
