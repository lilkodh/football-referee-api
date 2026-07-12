# Football Referee API

A REST API built with **Node.js**, **Express.js**, **PostgreSQL**, and **Sequelize** to manage football referees, matches, match assignments, and user authentication.

## Features

### General

* MVC architecture
* PostgreSQL database with Sequelize ORM
* RESTful API
* Input validation using Zod
* Centralized error handling
* Request logger middleware
* Authentication logging
* Filtering, searching, sorting, and pagination
* Sequelize associations and eager loading
* Foreign keys and database indexes

### Authentication & Authorization

* User registration
* User login with JWT
* Password hashing using bcrypt
* Protected routes with JWT authentication
* Role-Based Access Control (RBAC)
* Change password endpoint
* Get authenticated user profile
* Referees can access only their own matches

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JWT (jsonwebtoken)
* bcrypt
* Zod
* dotenv

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd football-referee-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Example:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=football_referee_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
```

### 4. Start the server

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The API runs on:

```text
http://localhost:3000
```

---

# API Endpoints

## Authentication

| Method | Endpoint                | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| POST   | `/auth/register`        | Register a new user (Admin only)     |
| POST   | `/auth/login`           | Login and receive JWT                |
| GET    | `/auth/me`              | Get authenticated user               |
| PUT    | `/auth/change-password` | Change authenticated user's password |

---

## Referees

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | `/referees`             |
| GET    | `/referees/:id`         |
| POST   | `/referees`             |
| PUT    | `/referees/:id`         |
| DELETE | `/referees/:id`         |
| GET    | `/referees/:id/matches` |
| GET    | `/referees/me/matches`  |

---

## Matches

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | `/matches`              |
| GET    | `/matches/:id`          |
| POST   | `/matches`              |
| PUT    | `/matches/:id`          |
| DELETE | `/matches/:id`          |
| GET    | `/matches/:id/referees` |

---

## Assignments

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | `/assignments`     |
| GET    | `/assignments/:id` |
| POST   | `/assignments`     |
| PUT    | `/assignments/:id` |
| DELETE | `/assignments/:id` |

---

# User Roles

The API supports four roles:

* **admin**

  * Full access to all resources.
* **commissioner**

  * Manages referees, matches, and assignments.
* **referee**

  * Read-only access and can view only their own assigned matches.
* **consultation**

  * Read-only access to referees and matches.

---

# Authentication

Protected endpoints require a JWT.

Example:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# Project Structure

```text
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── schemas/
├── logs/
├── app.js
└── server.js
```

---

# Author

**Khalid Drihem**
