#!/bin/bash

# GitHub Pages Deployment Script for Bharat Renewable Energy

echo "🚀 Deploying to GitHub Pages..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file with your Supabase credentials:"
    echo ""
    echo "VITE_SUPABASE_URL=https://your-project.supabase.co"
    echo "VITE_SUPABASE_ANON_KEY=your-anon-key"
    echo ""
    exit 1
fi

# Install gh-pages if not already installed
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Copy index.html to 404.html for SPA routing
echo "📄 Creating 404.html for SPA routing..."
cp dist/index.html dist/404.html

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo ""
echo "Your site will be live at:"
echo "https://YOUR_USERNAME.github.io/YOUR_REPO/"
echo ""
echo "Note: It may take a few minutes for GitHub Pages to update."
