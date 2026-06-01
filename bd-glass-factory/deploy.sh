#!/bin/bash
set -e

echo "🚀 Deploying BD Glass Factory..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build Next.js app
echo "🔨 Building..."
npm run build

# Copy static assets for standalone mode
echo "📂 Copying static assets..."
mkdir -p .next/standalone/.next
if [ -d "public" ] && [ "$(ls -A public 2>/dev/null)" ]; then
    cp -r public .next/standalone/
fi
if [ -d ".next/static" ]; then
    cp -r .next/static .next/standalone/.next/
fi

# Create logs directory
mkdir -p logs

# Restart PM2 process
echo "♻️  Restarting PM2..."
if pm2 list | grep -q "bd-glass-factory"; then
    pm2 reload ecosystem.config.js --env production
else
    pm2 start ecosystem.config.js --env production
    pm2 save
fi

echo "✅ Deployment complete!"
