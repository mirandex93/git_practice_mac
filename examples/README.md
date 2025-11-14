# Practice Examples

This directory contains sample files for practicing Git operations.

## Directory Structure

- `python/` - Python code examples
- `javascript/` - JavaScript code examples
- `text-files/` - Simple text files for basic Git practice

## How to Use These Examples

### For Beginners

1. **Make your first edit**
   - Open `text-files/notes.txt`
   - Add your own notes
   - Commit the changes

2. **Practice with code**
   - Modify the greeting in `python/hello.py` or `javascript/hello.js`
   - Run the script to see your changes
   - Commit and push

3. **Create a feature branch**
   ```bash
   git checkout -b practice/add-function
   ```
   - Add a new function to one of the code files
   - Commit your changes
   - Merge back to main

### For Intermediate Users

1. **Practice merge conflicts**
   - Create two branches
   - Edit the same line in both branches
   - Try merging them together
   - Resolve the conflict

2. **Rewrite history** (on practice branches only!)
   - Use `git rebase` to clean up commits
   - Squash multiple commits into one
   - Amend commit messages

## Running the Examples

### Python
```bash
python3 examples/python/hello.py
```

### JavaScript
```bash
node examples/javascript/hello.js
```

## Tips

- Always commit working code
- Test your changes before committing
- Use descriptive commit messages
- Don't commit sensitive information (passwords, API keys, etc.)
