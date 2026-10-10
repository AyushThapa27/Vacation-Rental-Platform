# Vacation Rental Platform (Wanderlust)

A full-stack web application inspired by Airbnb where users can create, manage, and review vacation rental listings.  
The project is built using Node.js, Express, and MongoDB and follows the MVC architecture pattern.

This project is currently **under development**, and new features are being added gradually.

---

## Features (Current)

- User authentication (signup, login, logout)
- Create, edit, and delete vacation rental listings
- Add and delete reviews for listings
- Authorization (users can only modify their own content)
- Session-based authentication using cookies
- Flash messages for user feedback
- Server-side rendering using EJS templates
- Responsive UI using Bootstrap 5

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Frontend:** EJS, Bootstrap 5
- **Other Tools:** Express-session, Method-Override, Connect-flash

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AyushThapa27/Vacation-Rental-Platform.git
cd Vacation-Rental-Platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

### 4. Run the application

```bash
npm start
```

### 5. Open in browser

http://localhost:8080/listings

---

## 📁 Project Structure

```
├── app.js                 # Main entry point
├── middleware.js          # Custom middleware functions
├── schema.js              # Validation schemas (Joi)
├── routes/                # Application routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/                # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                 # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/                # Static assets (CSS, Bootstrap)
└── utils/                 # Helper functions
```

---

## 🧠 What I Learned

- Building RESTful APIs using Express.js
- Authentication using Passport.js
- Session management with cookies
- Authorization and access control
- MongoDB schema design and relationships
- MVC architecture in a real-world project structure

---

## 🚧 Project Status

This project is currently **under development**.  
More features and improvements are actively being worked on.

---

## 🔮 Planned Improvements

- Image upload functionality for listings
- Booking system for vacation rentals
- Map integration for location-based listings
- Payment gateway integration
- Advanced search and filtering options
- User profile pages with activity tracking

---

## ⭐ Note

This project is built for learning and improving full-stack development skills, focusing on backend logic, authentication systems, and scalable architecture design.
