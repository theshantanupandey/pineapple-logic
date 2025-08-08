// Script to fix motion/react imports
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findFilesWithExtension(dir, extension, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFilesWithExtension(filePath, extension, fileList);
    } else if (path.extname(file) === extension) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace motion/react imports with framer-motion
    content = content.replace(/from\s+['"]motion\/react['"]/, 'from "framer-motion"');
    
    // Only write to file if content has changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Find all TypeScript and TSX files
const pagesDir = path.join(__dirname, 'pages');
const componentsDir = path.join(__dirname, 'components');

const tsxFiles = findFilesWithExtension(pagesDir, '.tsx');
const tsxComponentFiles = findFilesWithExtension(componentsDir, '.tsx');
const allFiles = [...tsxFiles, ...tsxComponentFiles];

// Process each file
let updatedCount = 0;
allFiles.forEach(file => {
  const updated = replaceInFile(file);
  if (updated) updatedCount++;
});

console.log(`Updated ${updatedCount} files.`);