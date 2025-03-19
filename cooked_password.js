// A simple login system with an intentional error in password check

function login(username, password) {
  const correctPassword = "securePassword123";

  // Intentional error: using assignment operator '=' instead of comparison '=='
  if (password = correctPassword) {
    console.log("Login successful!");
  } else {
    console.log("Invalid password!");
  }
}

// Test the login function with the correct password
login("user1", "securePassword123");  // Expected outcome: "Login successful!"
