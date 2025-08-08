import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDir = path.join(__dirname, 'components', 'ui');

fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const filePath = path.join(uiDir, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }

        // Fix @radix-ui imports with version numbers
        let updatedData = data.replace(/@radix-ui\/([^@]+)@[\d.]+/g, '@radix-ui/$1');
        
        // Fix lucide-react imports with version numbers
        updatedData = updatedData.replace(/lucide-react@[\d.]+/g, 'lucide-react');

        // Fix class-variance-authority imports with version numbers
        updatedData = updatedData.replace(/class-variance-authority@[\d.]+/g, 'class-variance-authority');

        // Fix cmdk imports with version numbers
        updatedData = updatedData.replace(/cmdk@[\d.]+/g, 'cmdk');

        // Fix next-themes imports with version numbers
        updatedData = updatedData.replace(/next-themes@[\d.]+/g, 'next-themes');

        // Fix sonner imports with version numbers
        updatedData = updatedData.replace(/sonner@[\d.]+/g, 'sonner');

        // Fix input-otp imports with version numbers
        updatedData = updatedData.replace(/input-otp@[\d.]+/g, 'input-otp');

        // Fix vaul imports with version numbers
        updatedData = updatedData.replace(/vaul@[\d.]+/g, 'vaul');

        // Fix react-resizable-panels imports with version numbers
        updatedData = updatedData.replace(/react-resizable-panels@[\d.]+/g, 'react-resizable-panels');

        // Fix recharts imports with version numbers
        updatedData = updatedData.replace(/recharts@[\d.]+/g, 'recharts');

        // Fix react-day-picker imports with version numbers
        updatedData = updatedData.replace(/react-day-picker@[\d.]+/g, 'react-day-picker');

        if (updatedData !== data) {
          fs.writeFile(filePath, updatedData, 'utf8', err => {
            if (err) {
              console.error(`Error writing file ${file}:`, err);
              return;
            }
            console.log(`Fixed imports in ${file}`);
          });
        }
      });
    }
  });
});