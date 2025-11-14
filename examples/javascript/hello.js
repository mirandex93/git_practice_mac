// Sample JavaScript file for Git practice

/**
 * Greet a user with a personalized message
 * @param {string} name - The name of the user
 * @returns {string} A greeting message
 */
function greet(name) {
    return `Hello, ${name}! Welcome to Git practice.`;
}

/**
 * Main function to demonstrate the greeting
 */
function main() {
    const userName = "Git Learner";
    const message = greet(userName);
    console.log(message);
}

// Run the main function
main();
