# Wanderlust - Vacation Rental Platform

A full-stack web application for listing and reviewing vacation rentals, similar to Airbnb. Users can create accounts, post listings, leave reviews, and book accommodations.

## Features

- **User Authentication** - Secure signup/login with Passport.js
- **Listings Management** - Create, read, update, and delete property listings
- **Review System** - Users can leave ratings and comments on listings
- **Session Management** - Persistent user sessions with Express-session
- **Flash Messaging** - User feedback with success/error notifications
- **Responsive UI** - Bootstrap-based responsive design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **Frontend**: EJS Templates, Bootstrap 5
- **Tools**: Nodemon (development), Method-Override

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd major_project
```

2. Install dependencies

```bash
npm install
```

3. Start MongoDB

```bash
mongod
```

4. Run the application

```bash
npm start
# Or for development with auto-reload
npm run dev
```

5. Open browser and visit

```
http://localhost:8080
```

## Usage

- **Home** - Browse all listings
- **Sign Up** - Create a new account
- **Login** - Authenticate with your credentials
- **New Listing** - Add a property (requires login)
- **Edit/Delete** - Manage your own listings
- **Reviews** - Leave ratings and comments on listings (requires login)

## Project Structure

```
├── app.js                 # Main server file
├── middleware.js          # Custom middleware functions
├── schema.js              # Joi validation schemas
├── package.json
├── routes/
│   ├── listing.js        # Listings routes
│   ├── review.js         # Reviews routes
│   └── user.js           # Authentication routes
├── models/
│   ├── listing.js        # Listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── views/                # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/               # Static files (CSS, JS)
└── utils/                # Utility functions
```

## Future Improvements

- Add booking functionality
- Implement image uploads
- Add payment integration
- Email verification
- Admin dashboard
- Advanced search filters
- User ratings and profiles
