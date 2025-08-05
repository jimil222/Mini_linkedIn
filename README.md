# ProConnect - MERN Stack Mini LinkedIn App

ProConnect is a mini LinkedIn-like community platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register, log in, create posts, and view a community feed.

## Features

- User registration and login with JWT authentication
- Protected routes using React Router
- Post creation and listing
- Like posts
- View user profile

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

#### 1. Clone the repository

```
git clone https://github.com/yourusername/proconnect.git
cd proconnect
```

#### 2. Setup backend

```
cd backend
npm install
```
Create a `.env` file in the `backend` folder with the following content:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/proconnect
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```
npm run dev
```

#### 3. Setup frontend

```
cd ../frontend
npm install
npm run dev
```

## Folder Structure

```
proconnect/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Posts
- `GET /api/posts`
- `POST /api/posts`
- `PATCH /api/posts/:id/like`

## License

This project is licensed under the MIT License.
