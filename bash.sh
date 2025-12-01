#!/bin/bash

# Phase 1: Project Foundation - Initial Setup
# Creates base project structure and configuration files

# Create directory structure
mkdir -p src/styles
mkdir -p src/scripts
mkdir -p dist

# Create package.json
cat > package.json << 'EOF'
{
  "name": "semantic-calculator",
  "version": "1.0.0",
  "description": "A calculator application built with semantic HTML and TypeScript",
  "scripts": {
    "build": "tsc && npm run copy-assets",
    "copy-assets": "cp src/index.html dist/ && cp src/styles/main.css dist/",
    "watch": "tsc --watch",
    "serve": "python3 -m http.server 8000 --directory dist"
  },
  "devDependencies": {
    "typescript": "^5.3.0"
  }
}
EOF

# Create TypeScript configuration
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "outDir": "./dist",
    "rootDir": "./src/scripts",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/scripts/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
*.log
.DS_Store
EOF

# Create README
cat > README.md << 'EOF'
# Semantic Calculator

A professional calculator application built with semantic HTML and TypeScript.

## Features
- Built entirely with semantic HTML elements
- TypeScript implementation without eval() or pre-defined calculation functions
- Clean, maintainable code structure
- Beginner-friendly codebase

## Development

### Install dependencies
```bash
npm install
```

### Build the project
```bash
npm run build
```

### Watch mode (auto-compile TypeScript)
```bash
npm run watch
```

### Serve locally
```bash
npm run serve
```

Then open http://localhost:8000 in your browser.

## Project Structure
- `src/index.html` - Main HTML file with semantic elements
- `src/styles/main.css` - Styling for the calculator
- `src/scripts/` - TypeScript source files
- `dist/` - Compiled output directory
EOF

echo "Phase 1 Complete: Project foundation created"
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Test the setup"
echo "3. Commit: git add . && git commit -m 'Phase 1: Project foundation'"
echo "4. Push: git push origin main"