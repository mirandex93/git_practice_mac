# Contributing to Git Practice Repository

This guide will help you understand the Git workflow for contributing to this practice repository.

## Workflow Overview

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone https://github.com/mirandex93/git_practice_mac.git
   cd git_practice_mac
   ```

2. **Create a new branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** to the files

4. **Stage your changes**
   ```bash
   git add <filename>
   # or add all changes
   git add .
   ```

5. **Commit your changes** with a descriptive message
   ```bash
   git commit -m "Add: description of your changes"
   ```

6. **Push your branch** to the remote repository
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

## Commit Message Guidelines

Use clear and descriptive commit messages:

- **Add**: When adding new files or features
- **Update**: When modifying existing files
- **Fix**: When fixing bugs or issues
- **Remove**: When deleting files or features
- **Refactor**: When restructuring code without changing functionality

Examples:
- `Add: sample Python script for practice`
- `Update: README with new Git commands`
- `Fix: typo in CONTRIBUTING guide`

## Branch Naming Conventions

- `feature/description` - for new features
- `bugfix/description` - for bug fixes
- `practice/your-name` - for personal practice branches

## Best Practices

1. **Commit often**: Make small, focused commits
2. **Write clear messages**: Future you will thank present you
3. **Pull before push**: Always pull the latest changes before pushing
4. **Review your changes**: Use `git diff` before committing
5. **Keep branches focused**: One branch per feature or fix

## Need Help?

If you're stuck, try:
- `git status` - to see what's going on
- `git log` - to view commit history
- `git diff` - to see what changed
- GitHub's documentation and community forums
