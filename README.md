# MERN Food Ordering App

## Overview
This is a **Full Stack MERN (MongoDB, Express, React, Node.js) Food Ordering Web App** that allows users to browse food items, add them to a cart, proceed to checkout, and place orders. The project includes user authentication, Stripe payments, an admin panel for order management, and a responsive UI.

## Features
- **User Authentication**: Signup/Login using email & password.
- **Food Browsing & Filtering**: View different categories of food.
- **Cart Management**: Add/remove items, adjust quantities.
- **Checkout & Payment**: Integrated with Stripe for secure payments.
- **Order Tracking**: Users can check the order status.
- **Admin Panel**: Manage food items and order statuses.
- **Fully Responsive**: Optimized for all screen sizes.

## Tech Stack
- **Frontend**: React.js, React Router, CSS (custom stylesheets)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Context API
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe API

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/mern-food-ordering-app.git
cd mern-food-ordering-app
```

### 2. Install Dependencies
#### Frontend:
```sh
cd frontend
npm install
```
#### Backend:
```sh
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the backend folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Run the Application
#### Start Backend:
```sh
cd backend
npm start
```
#### Start Frontend:
```sh
cd frontend
npm run dev
```

## Usage
- Visit **http://localhost:3000/** for the frontend.
- Signup/Login to explore food items.
- Add items to the cart and proceed to checkout.
- Admin can login via **/admin** to manage orders.

## Admin Panel Features
- **Add/Remove Food Items**
- **Change Order Status** (Processing, Out for Delivery, Delivered)

## Deployment
- **Frontend**: Deploy on **Vercel/Netlify**
- **Backend**: Deploy on **Render/Heroku**
- **Database**: MongoDB Atlas

## Live Demo
[Click Here](https://tomato-food-delapp-react.web.app/)

## License
This project is licensed under the MIT License.

---

### Notes
- Ensure MongoDB and Stripe API keys are correctly configured.
- Admin panel access is restricted; update the admin credentials in the backend.
- Make sure to deploy frontend and backend separately and update API URLs accordingly.

Happy Coding! 



