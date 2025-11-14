# Git Practice Repository

Welcome to your Git practice repository! This repository is designed to help you learn and practice Git commands on macOS.

## Getting Started

This repository contains sample files and directories that you can use to practice various Git operations such as:

- Creating and switching branches
- Making commits
- Merging branches
- Resolving conflicts
- Working with remote repositories
- Using .gitignore

## Quick Git Commands Reference

### Basic Commands
```bash
# Check repository status
git status

# Add files to staging area
git add <filename>
git add .

# Commit changes
git commit -m "Your commit message"

# View commit history
git log
git log --oneline
```

### Branch Commands
```bash
# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# List all branches
git branch -a

# Delete a branch
git branch -d <branch-name>
```

### Remote Commands
```bash
# View remote repositories
git remote -v

# Push changes to remote
git push origin <branch-name>

# Pull changes from remote
git pull origin <branch-name>

# Clone a repository
git clone <repository-url>
```

## Practice Exercises

1. **Basic Workflow**: Edit a file, stage it, and commit your changes
2. **Branching**: Create a new branch, make changes, and merge it back
3. **Conflict Resolution**: Create conflicting changes in different branches and practice resolving them
4. **Remote Work**: Push and pull changes to/from GitHub

## Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Learn Git Branching](https://learngitbranching.js.org/)

## Contributing

Feel free to practice by making changes to this repository! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on the Git workflow.