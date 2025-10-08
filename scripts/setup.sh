#!/bin/bash

# Environment Setup Script for Brian Lockhart's Portfolio

echo "🚀 Setting up environment for Brian Lockhart's Portfolio..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📄 Creating .env.local from template..."
    cp .env.example .env.local
    echo "✅ .env.local created from .env.example"
    echo "📝 Please edit .env.local with your actual values"
else
    echo "✅ .env.local already exists"
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

# Remove any DS_Store files
echo "🧹 Cleaning up DS_Store files..."
find . -name ".DS_Store" -type f -delete
echo "✅ DS_Store files removed"

# Check if Git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "🎉 Environment setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env.local with your configuration"
echo "2. Run 'npm run dev' to start development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🚀 Happy coding!"