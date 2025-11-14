#!/usr/bin/env python3
"""
Sample Python script for Git practice.

This script demonstrates a simple greeting function.
You can modify this file to practice Git commands.
"""

def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}! Welcome to Git practice."

def main():
    """Main function."""
    user_name = "Git Learner"
    message = greet(user_name)
    print(message)

if __name__ == "__main__":
    main()
