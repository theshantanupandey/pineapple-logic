import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directories to search
const directories = [
  path.join(__dirname, 'components', 'ui')
];

// Regular expressions for finding versioned imports
const versionedImportRegex = {
  radix: /from\s+["'](@radix-ui\/[\w-]+)@([\d\.]+)["']/g,
  cva: /from\s+["'](class-variance-authority)@([\d\.]+)["']/g,
  lucide: /from\s+["'](lucide-react)@([\d\.]+)["']/g,
  other: /from\s+["'](\w+(?:-\w+)*)@([\d\.]+)["']/g
};

// Debug function to check if regex is matching
function testRegex(content) {
  console.log('Testing regex patterns on sample content...');
  const radixMatches = content.match(versionedImportRegex.radix);
  const cvaMatches = content.match(versionedImportRegex.cva);
  const lucideMatches = content.match(versionedImportRegex.lucide);
  
  console.log('Radix matches:', radixMatches);
  console.log('CVA matches:', cvaMatches);
  console.log('Lucide matches:', lucideMatches);
}

// Process files in the given directories
async function processFiles() {
  let totalFilesUpdated = 0;
  let totalImportsFixed = 0;

  // Add more directories to search
  directories.push(path.join(__dirname, 'components'));
  directories.push(path.join(__dirname, 'pages'));
  directories.push(path.join(__dirname));

  for (const directory of directories) {
    if (!fs.existsSync(directory)) {
      console.log(`Directory does not exist: ${directory}`);
      continue;
    }

    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        // Skip directories we've already included
        if (directories.includes(filePath)) {
          continue;
        }
        // Skip node_modules and other special directories
        if (file === 'node_modules' || file === '.git') {
          continue;
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content; // Store original content for comparison
        let fileImportsFixed = 0;
        
        // Check for any versioned imports using @ symbol
        const hasVersionedImport = content.includes('@') && /from\s+["'][^"']+@[\d\.]+["']/g.test(content);
        
        if (hasVersionedImport) {
          console.log(`Found versioned imports in ${file}`);
          
          // Process all lines in the file
          const lines = content.split('\n');
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Check for any import with @version pattern
            if (line.includes('import') && line.includes('from') && line.includes('@') && /from\s+["'][^"']+@[\d\.]+["']/g.test(line)) {
              // Replace any package@version with just package
              const newLine = line.replace(/([\w-]+(?:\/[\w-]+)*)@([\d\.]+)/g, '$1');
              
              if (newLine !== line) {
                lines[i] = newLine;
                fileImportsFixed++;
                console.log(`  Fixed: ${line.trim()} -> ${newLine.trim()}`);
              }
            }
          }
          content = lines.join('\n');
        }
        
        // Check if content was actually updated
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          totalFilesUpdated++;
          totalImportsFixed += fileImportsFixed;
          console.log(`Updated ${filePath} (fixed ${fileImportsFixed} imports)`);
        }
      }
    }
  }

  console.log(`\nSummary: Updated ${totalFilesUpdated} files, fixed ${totalImportsFixed} versioned imports.`);
  
  if (totalFilesUpdated === 0) {
    console.log('No files were updated. This could mean either:');
    console.log('1. All versioned imports were already fixed');
    console.log('2. The script did not find any versioned imports');
    console.log('\nIf you still have issues with versioned imports, please check the build errors for specific file paths.');
  }
}

processFiles().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});