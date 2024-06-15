# Minimalist Messaging Project

This project is a minimalist messaging application built with React.js (Vite), Node.js, Express, and the ChatEngine.io SDK for instant messaging.

## Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **Messaging SDK:** ChatEngine.io (https://chatengine.io/)

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
    git clone https://github.com/itshakim213/chatapp.git
    cd chatapp

2. Install dependencies for the frontend:

    cd client
    npm install

3. Install dependencies for the backend:

    cd ../server
    npm install

### Running the Application

1. Start the backend server:

    cd server
    npm start

2. Start the frontend development server:

    cd ../client
    npm run dev

## Project Structure

chatapp/
├── client/                # Frontend code (React)
│   ├── public/            # Public assets
│   ├── src/               # Source files
│   │   ├── assets/        # React assets
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Root package.json
├── server/                # Backend code (Node.js, Express)
│   ├── index.js           # Server entry point
│   ├── package.json       # Root package.json
│   └── .gitignore         # Git ignore file
└── README.md              # Project README file