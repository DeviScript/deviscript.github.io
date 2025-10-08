# Git Quick Commands

This file contains quick reference commands for managing your personal site repository.

## 🚀 Quick Deploy Methods

### Method 1: Using the Script

```bash
# Quick deploy with custom message
./git-quick.sh "Updated portfolio projects"

# Quick deploy with auto-generated message
./git-quick.sh
```

### Method 2: Using NPM Scripts

```bash
# Build and deploy in one command
npm run quick

# Just deploy (without building)
npm run deploy
```

### Method 3: Manual Git Commands

```bash
# Standard workflow
git add .
git commit -m "Your message here"
git push origin main

# One-liner
git add . && git commit -m "Quick update" && git push origin main
```

## 📋 Common Git Commands

### Check Status

```bash
git status              # See what's changed
git log --oneline -5    # See recent commits
```

### Branch Management

```bash
git branch              # List branches
git checkout -b feature # Create new branch
git checkout main       # Switch to main
```

### Undo Changes

```bash
git checkout -- .       # Discard all changes
git reset --soft HEAD~1 # Undo last commit (keep changes)
git reset --hard HEAD~1 # Undo last commit (discard changes)
```

### Remote Management

```bash
git remote -v           # Check remote URLs
git pull origin main    # Get latest changes
```

## 🌐 Deployment Info

- **Live Site**: https://deviscript.github.io
- **Deployment**: Automatic via GitHub Actions
- **Build Time**: ~2-3 minutes after push

## 💡 Tips

1. **Always test locally first**: `npm run dev`
2. **Check build before deploy**: `npm run build`
3. **Monitor deployment**: Check the Actions tab on GitHub
4. **Force refresh**: Cmd+Shift+R to see changes immediately
