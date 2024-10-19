Tomato - Full Stack Food Ordering Web Application

Project Description
Tomato is a full-stack food ordering web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application provides a seamless experience for users to browse food items, place orders, and make secure payments. The project includes a fully functional admin panel for managing food items and tracking order statuses in real time.

Key Features
Dynamic User Interface: Built with React.js, the application provides a smooth, responsive user interface for browsing food items and placing orders.

Responsive Design: Ensures a consistent experience across mobile, tablet, and desktop devices.

Shopping Cart: Users can add items to the cart and proceed to checkout with ease.

Category Filtering: Allows users to filter food items by category for efficient browsing.

User Authentication: Secure sign-up and login functionalities with form validation for user accounts.

Stripe Payment Integration: Enables users to make secure online payments for their orders.

Admin Panel: Provides functionality for the admin to add, edit, or delete food items and track orders in real-time.

Technology Stack
MongoDB: Used for storing user and order data, as well as managing food items.

Express.js: Handles the back-end logic and API routes.

Node.js: Provides the server-side environment to run the application.

React.js: Creates the front-end user interface for users and the admin panel.

Stripe: Integrated for secure online payment processing.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Jijojacob988/Tomatoo.git
Navigate to the project folder:

bash
Copy code
cd Tomatoo
Install dependencies for both the backend and frontend:

bash
Copy code
# For backend
cd backend
npm install

# For frontend
cd frontend
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:
env
Copy code
MONGODB_URI=your-mongodb-uri
STRIPE_SECRET_KEY=your-stripe-secret-key
PORT=your-server-port
Start the development server:

bash
Copy code
# For backend
cd backend
npm run dev

# For frontend
cd frontend
npm start
Open the app in your browser at http://localhost:3000.

Admin Panel
The admin panel allows for managing the food items (add, edit, delete) and viewing real-time order updates. The admin functionalities can be accessed through specific routes within the application.

Contributing
Feel free to submit issues or pull requests to help improve the application.

License
This project is licensed under the MIT License.

