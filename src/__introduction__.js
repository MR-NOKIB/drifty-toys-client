// 1. Design & UI Guidelines
// Ensure a visually appealing website.
// Use pleasing color contrast and proper alignment & spacing (avoid cluttered "Gobindo" design).
// Customize components from libraries like Daisy UI to fit the website’s style.
// The website must not resemble previous projects (e.g., Dragon News, Job Portal, Travel Guru, etc.).


// 2. Navbar & Footer
// Navbar Includes:
// Website logo & name
// Home, All Toys, My Toys, Add A Toy, Blogs, User Profile Picture
// Conditional Rendering:
// Show Login button if not logged in.
// Show profile picture & username (on hover) if logged in.
// Footer Includes:
// Website logo & name
// Copyright
// Contact details, social media links, address
// Navbar & Footer should be present on all pages except the 404-page.



// 3. Authentication System
// Login Page:
// Email/Password login
// Google Sign-in
// Link to Registration page
// Registration Page:
// Fields: Name, Email, Password, Photo URL
// No email verification (can add after submission).



// 4. Home Page Components
// Banner Section: Meaningful slider/banner.
// Gallery Section: Display attractive images.
// Shop by Category:
// Use React-tabs or custom CSS.
// Include 3 sub-categories (e.g., Math Toys, Language Toys, Science Toys).
// Each sub-category should have at least 2 toys with:
// Picture, Name, Price, Rating, View Details button.
// If a user is not logged in, clicking "View Details" should:
// Show a toast/notification: "You have to log in first to view details."
// Redirect them to the login page.
// Extra Sections: Add two attractive sections.



// 5. Blogs Page
// Answer the following:
// What is an access token and refresh token? How do they work, and where should they be stored?
// Compare SQL and NoSQL databases.
// What is Express.js? What is Nest.js?
// What is MongoDB Aggregate, and how does it work?



// 6. All Toys Page
// Show all toys in a table format with columns:
// Seller Name, Toy Name, Sub-category, Price, Available Quantity, View Details button
// Pagination: Show 20 results by default.
// Search Feature: Search by Toy Name.
// View Details:
// Without login: Redirect to login page.
// After login: Redirect to the toy details page.



// 7. Single Toy Details (Private Route)
// Route: /toy/:id
// Show details: Picture, Name, Seller Name, Email, Price, Rating, Quantity, Description.
// Optional: Show details in a modal.
// 8. Add A Toy Page (Private Route)
// Form fields:
// Picture URL, Name, Seller Name (from logged-in user), Seller Email, Sub-category, Price, Rating, Quantity, Description.



// 9. My Toys Page (Private Route)
// Show toys added by the logged-in user (in table format).
// Update Action: Allow updating Price, Quantity, Description (via modal or new route).
// Delete Action:
// Ask for confirmation before deleting.
// Remove toy upon confirmation.
// Users can only see their own toys, not others'.
// Show relevant toast/notifications for CRUD operations.



// 10. 404 Page
// Display an interesting JPG/GIF.
// No navbar or footer.
// Back to Home button redirects to the homepage.
// 11. Security
// Use environment variables to hide Firebase & MongoDB credentials.