#!/bin/bash

# Quick Start Script for Andrija Đurović Portfolio

echo "🚀 Starting Andrija Đurović Portfolio Setup"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✓ Node.js: $(node -v)"
echo "✓ npm: $(npm -v)"
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed"
    exit 1
fi

echo ""
echo "✓ Installation complete"
echo ""
echo "🎉 Setup complete! Available commands:"
echo ""
echo "  npm run dev      → Start development server (http://localhost:3000)"
echo "  npm run build    → Build for production"
echo "  npm start        → Start production server"
echo "  npm run lint     → Run linter"
echo ""
echo "📖 Documentation:"
echo "  - SETUP.md              → Complete setup guide"
echo "  - DEPLOYMENT.md         → Deployment instructions"
echo "  - CONTENT_UPDATES.md    → How to update content"
echo ""
echo "Ready to develop? Run: npm run dev"
echo ""
