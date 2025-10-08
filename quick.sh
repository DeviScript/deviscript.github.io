#!/bin/bash

# Quick Git Script Launcher
# Provides easy access to development scripts

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Run the git quick script
./scripts/development/git-quick.sh "$@"