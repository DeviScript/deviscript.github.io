#!/bin/bash

# Git Quick Command Script for Personal Site
# Usage: ./git-quick.sh "Your commit message"

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Git Quick Deploy Script${NC}"
echo "=================================="

# Check if commit message is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}⚠️  No commit message provided. Using default message.${NC}"
    COMMIT_MSG="Quick update: $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

echo -e "${BLUE}📝 Commit message:${NC} $COMMIT_MSG"
echo ""

# Check git status
echo -e "${BLUE}📊 Checking git status...${NC}"
git status --short

echo ""

# Add all changes
echo -e "${BLUE}➕ Adding all changes...${NC}"
git add .

# Show what will be committed
echo -e "${BLUE}📋 Changes to be committed:${NC}"
git status --short

echo ""

# Commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "$COMMIT_MSG"

echo ""

# Push to origin
echo -e "${BLUE}🌐 Pushing to GitHub...${NC}"
git push origin main

echo ""
echo -e "${GREEN}✅ Successfully deployed to GitHub!${NC}"
echo -e "${GREEN}🌍 Your site will be updated at: https://deviscript.github.io${NC}"
echo ""
echo -e "${YELLOW}💡 Tip: Check the Actions tab for deployment progress${NC}"